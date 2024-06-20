from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # Include your API app routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),  # Catch-all route for Vue.js
]
