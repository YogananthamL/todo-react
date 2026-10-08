#!/bin/sh

set -e

echo "Database is ready"
echo "Starting migration"

python manage.py migrate

echo "Starting Django application"
exec python manage.py runserver 0.0.0.0:8000
