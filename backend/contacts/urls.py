from django.urls import path
from .views import ContactCreateView

urlpatterns = [
    path('message', ContactCreateView.as_view()),
]
