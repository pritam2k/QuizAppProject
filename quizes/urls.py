from django.urls import path
from .views import (
    QuizListView,
    quiz_view,
    quiz_data_view,
    save_quiz_view,
    register
)
from .forms import LoginForm, ChangePasswordForm, MyPasswordResetForm, MySetPasswordForm
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.contrib.auth import views as auth_views

app_name = 'quizes'

urlpatterns = [
    path('', QuizListView.as_view(), name='main-view'),
    path('<pk>/', quiz_view, name='quiz-view'),
    path('<pk>/save/', save_quiz_view, name='save-view'),
    path('<pk>/data/', quiz_data_view, name='quiz-data-view'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name="quizes/login.html",
                                                         authentication_form=LoginForm), name="login"),
    path('register/', register, name="register"),
]
