from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ProductViewSet, OrderViewSet, StorageViewSet
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'products', ProductViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'storage', StorageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


urlpatterns = [
    # your API routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
