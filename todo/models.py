from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()
    is_save = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title[:30]
