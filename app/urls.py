from django.urls import path
from .views import react_view

urlpatterns = [
    # ...
    path('', react_view)
]
