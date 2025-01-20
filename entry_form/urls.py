from django.urls import path
from . import views

app_name = 'entry_form'
urlpatterns = [
    path('', views.begin_entry_view, name="begin-template"),
    path('entry-form', views.entry_form_view , name="form-template"),
    path('unexpected-error', views.unexpected_error_view),
    path('submission-confirmation-<int:pk>', views.submission_confirmation),
]


