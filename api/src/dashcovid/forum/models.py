from django.db import models

# Create your models here.


class Post(models.Model):
    user = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    content = models.TextField()
    datetime = models.DateTimeField(auto_now=False, auto_now_add=True)


class Response(models.Model):
    user = models.CharField(max_length=50)
    content = models.TextField()
    datetime = models.DateTimeField(auto_now=False, auto_now_add=True)
    post = models.ForeignKey('Post', on_delete=models.CASCADE)