from django.urls import path

from .views import SingupView

urlpatterns = [
    path('signup', SingupView.as_view(), name='signup'),
]
