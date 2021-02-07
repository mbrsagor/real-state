from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import TodoViewSet, CustomJWTPaireView

router = DefaultRouter()

router.register('todo', TodoViewSet)

urlpatterns = [
    path('login/', CustomJWTPaireView.as_view(), name='login'),
] + router.urls
