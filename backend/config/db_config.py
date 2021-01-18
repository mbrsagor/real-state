# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'realState',
        'USER': 'macair',
        'PASSWORD': '12345',
        'HOST': 'localhost',
        'PORT': '',
    }
}
