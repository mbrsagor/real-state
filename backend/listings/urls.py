from django.urls import path

from .views import ListingsView, ListingView, SearchView

urlpatterns = [
    path('list-item', ListingsView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ListingView.as_view()),
]
