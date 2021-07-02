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

#### views.py
In `views.py` file is where we define what happens when a url or an endpoint is visited by the end user.
```python
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return HttpResponse('Hello world')

```
