# Introdution
### To create a fresh django project
```bash
  django-admin startproject django_course_site
```
`django-admin` is a tool that will be available after installing the Django using the `python -m pip install Django` command.


In Django multiple modules/apps form the overall project or application. For example if we consider and ecommerce as an example then order management can be an app, payments can be another app or module, user managment is one more etc.
### To Create an App or Module
```bash
python manage.py startapp app_name
```


#### We need to add our app to the list of installed apps in the  `settings.py` file in the main app.
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'meetups'
]
```

#### views.py
In `views.py` file is where we define what happens when a url or an endpoint is visited by the end user.
```python
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return HttpResponse('Hello world')

```

Once the view is ready then we need to connect the view method to the url. This can be done by creating a `urls.py` file in the app folder.
**Ex:**
```python
from django.urls import path
from . import views

urlpatterns = [
    path('meetups/', views.index)
]

```
Once this is ready, now we have to include these urls into the main application's urls.py file. That can be done as
```python
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('meetups.urls'))
]
```
#### To Run Development Server: *`python manage.py runserver`*

### Templates
We need to create a folder called *`templates`* inside the sub app/module. inside that we need to create on more folder with the name of the app or the module. This additional folder helps in avoiding naming conflicts when Django merges all the templates from all the modules.
In `views.py` file we reference the template as follows:
```python
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'meetups/index.html') #Accepts mainly two paraeters request and the relative path to the template from the templates folder
```
In template we use the following syntax to access the dynamic information.
```python
  {% myVar %}
```


### Static Files
We follow the similar file and folder structure to templates. Inside our module we create folder called *`static`* inside that one more folder with the module name to avoid the naming conflicting when Django merges all assets from all the modules in the end. So the file strcuture for static file will be something like the following:
```
meetups
  -static
    -meetups
      -js
        -base.js
      -styles
        -base.css
        
```
To reference a static file inside a template:
```html
{% load static %}<link rel="stylesheet" href="{% static 'meetups/styles/base.css' %}">
```

Dynamic data will be passed to the template file by passing a dictionary as the third parameter for the render function.
```python
return render(request, 'meetups/index.html', {
        'meetups': meetups,
        'showMeetups': True
    })
```

### Django Template Syntax Example:
```html
{% if showMeetups %}
    <ul>
      {% for meetup in meetups %}
      <li>{{meetup.title}}</li>
      {% endfor %}
    </ul>
    {% endif %}
```
### URL with dynamic route parameter
```python
path('meetups/<slug:meetup_slug>', views.meetup_details) #here slug is an optional specifier that tells django that this parameter should needs to be slug format
```
This parameter will be automatically passed to the function defined in the views file.
```python
def meetup_details(request, meetup_slug):
    meetup_details = {
        'title': 'First Meetup',
        'location': '473  Zimmerman Lane,Los Angeles,CA,California,90017',
        'description': ''
    }
    return render(request, 'meetups/meetup-details.html', {
        'title': meetup_details['title'],
        'location': meetup_details['location'],
        'description': meetup_details['description']})
```
### Naming Routes
We can give names to different urls by passing a named argument to the *`path`* fnction
```python
path('meetups/<slug:meetup_slug>',
         views.meetup_details, name='meetup-details')
```
and in template we can write as:
```html
<a href="{% url 'meetup-details' meetup.slug %}">More Details</a>
```
In the above code after the name of the route we can pass the parameters that the dynamic route expects.

### More On Templates
#### Layouts
In layout files we define place holders where actual data will be rendered in these placeholders.
```html
{% load static %}
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>{% block tiitle %}Meetups{% endblock %}</title>
    <meta name="description" content="All Meetups" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="{% static 'meetups/styles/base.css' %}" />
    {% block 'styles' %}{% endblock %}
  </head>
  <body>
    <!--[if lt IE 7]>
      <p class="browsehappy">
        You are using an <strong>outdated</strong> browser. Please
        <a href="#">upgrade your browser</a> to improve your experience.
      </p>
    <![endif]-->
    <header>{% include 'meetups/includes/nav.html'%}</header>
    <main>{% block 'body' %}{% endblock %}</main>
    <script src="" async defer></script>
  </body>
</html>
```
In the above code we have styles,title and body place holders. So in a template file we enlcose the data with similar curly brace syntax with the block name.
```html
{% extends 'meetups/layouts/base.html' %} {% block 'title' %}All
Meetups{%endblock %} {% block 'body' %}
<div class="container">
  <h1 class="text-center my-3">Upcoming Meetups</h1>
</div>
{% endblock %}
```
To include a partial into a template
```html
{%  include 'path/to/partial.html with location='hello world' name='my name' %} //Here we can pass data to the partial by passing it with `with` after the path to the partial file
```

### Models
A model can be created in the `models.py` file.
```python
class Meetup(models.Model):
    title = models.CharField(max_length=200) #based on the definition of these properties Django will automatically generate migrations
    slug = models.SlugField(unique=True)
    description = models.TextField()
```
To generate migration from the model class definition : `python manage.py makemigrations`. To run the generated migrations: `python manage.py migrate`

### Admin Panel
Django comes with an admin panel from where we can manage certain things about the application. 
A super user can be created by executing the following command `python manage.py createsuperuser`.
To add a model to the admin site and manage it from there in the `admin.py` file we have to register it as follows:
```python
from django.contrib import admin

# Register your models here.
from .models import Meetup

admin.site.register(Meetup)
```
### The Image Field
Django has an image field which will do a lot of background work. This field will look like a file picker in the admin ui where the file will be uploaded and saved at the selected location.
```python
image = models.ImageField(upload_to='images')
```
For this this to work we need few other things. in `settings.py` we need to add the following two variables.
```python
MEDIA_ROOT = BASE_DIR / 'uploads' #This value tells the django where to store the files on the hardrive
MEDIA_URL = '/files/ #This value tells django how the files will be served. We will be linking these two things together.
```
in the main `urls.py` file we add the following
```python
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('meetups.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```
The static function here attaches the media url to the existing urls and specifies the document root of the files.

### Few ORM Queries
```python
Meetup.objects.all() # Fetches all meetup objects from database
Meetup.objects.get(slug=meetup_slug) #Fetch a single meetup object from database as per slug
```

### Configuring Admin Panel
The admin panel can be configured in a lot of ways. for example in  `admin.py` file
```python
class MeetupAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug') #These colums will be displayed in the list view
    list_filter = ('title',) #a filter will be created on this field
    prepopulated_fields = {'slug': ('title',)} # the value of slug field will be filled based on the value of fields specified in the tuble.


admin.site.register(Meetup, MeetupAdmin)
```
In this code we created a class and inherited ModelAdmin class from the admin module imported. Then we are setting the `list_display`,`list_filter`,`prepopulated_fields` proerties.
