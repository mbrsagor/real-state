from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.Serializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'content', 'is_save',
                  'created_at', 'updated_at')
