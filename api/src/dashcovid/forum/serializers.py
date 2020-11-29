from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Post, Response


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Response
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    responses = ResponseSerializer(many=True, read_only=True, source='response_set')

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content', 'datetime', 'responses')