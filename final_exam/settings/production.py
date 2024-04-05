from .base import *

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECRET_KEY = os.getenv('SECRET_KEY')

ALLOWED_HOSTS = [
    '127.0.0.1',
    'shooter.pythonanywhere.com',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'shooter$food_app',
        'USER': 'shooter',
        'PASSWORD': os.getenv('MYSQL_PASSWORD'),
        'HOST': 'shooter.mysql.pythonanywhere-services.com',
        'OPTIONS': {
            'init_command': "SET NAMES 'utf8mb4'; SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4'
        }
    }
}