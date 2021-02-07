from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import TodoSerializer, TokenObtainTokenSerializer
from .models import Todo


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all().order_by('-id')
    serializer_class = TodoSerializer
    # permission_classes = (permissions.IsAuthenticated, )


class CustomJWTPaireView(TokenObtainPairView):
    serializer_class = TokenObtainTokenSerializer
