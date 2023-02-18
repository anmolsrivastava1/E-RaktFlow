#!/bin/bash

# python manage.py migrate

python manage.py collectstatic --no-input --clear

service redis-server start

service redis-server status

if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    python manage.py createsuperuser \
        --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL 
fi
$@


python manage.py runserver 0.0.0.0:8000 #& celery -A config worker --beat --scheduler django --loglevel=info
