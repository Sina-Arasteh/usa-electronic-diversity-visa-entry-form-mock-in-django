from django.urls import path
from . import views

app_name = 'entry_form'
urlpatterns = [
    path('', views.begin_entry_view),
    # path('entry-form', views , name="begin"),
]

