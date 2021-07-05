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


