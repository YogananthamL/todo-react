# 3-Tier Todo Application

A full-stack todo app built with React (frontend), Django REST Framework (backend), and PostgreSQL (database). This project is configured for local development only and does not use Docker or Docker Compose.

## Architecture

- Frontend: React + Vite
- Backend: Django REST Framework
- Database: PostgreSQL

## Project Structure

```
repo-root/
├── backend/
│   ├── requirements.txt
│   ├── manage.py
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── tasks/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── migrations/
│           └── __init__.py
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── components/
│       │   ├── TaskForm.jsx
│       │   ├── TaskList.jsx
│       │   └── TaskItem.jsx
│       └── services/
│           └── api.js
├── .env
├── .gitignore
├── README.md
```

## Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL 14+
- npm
- A PostgreSQL user with database creation permissions

## PostgreSQL Setup

1. Install PostgreSQL locally.
2. Create a database and user:

```bash
psql -U postgres
CREATE DATABASE todo_db;
CREATE USER postgres WITH PASSWORD 'postgres';
ALTER ROLE postgres WITH SUPERUSER;
```

3. Confirm the values in the root `.env` file match your local PostgreSQL installation.

Example `.env`:

```env
DEBUG=True
DJANGO_SECRET_KEY=change-me-to-a-long-random-secret-key
DB_NAME=todo_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
```

## Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python manage.py makemigrations tasks
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The React app will run on:

- http://localhost:5173

The Django API will run on:

- http://localhost:8000/api/tasks/

## API Endpoints

The backend exposes the following CRUD API:

- GET /api/tasks/
- POST /api/tasks/
- GET /api/tasks/<id>/
- PUT /api/tasks/<id>/
- PATCH /api/tasks/<id>/
- DELETE /api/tasks/<id>/

## Features

- Add a new todo task
- Toggle task completion
- Delete a task
- Display tasks from the backend
- React frontend communicates with the Django REST API

## Run Instructions

1. Start PostgreSQL.
2. Start the backend:

```bash
cd backend
source .venv/bin/activate
python manage.py runserver 0.0.0.0:8000
```

3. Start the frontend in a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

4. Open the app in the browser:

```text
http://localhost:5173
```

## Notes

- The backend CORS settings allow requests from http://localhost:5173.
- Frontend requests point to http://localhost:8000/api.
- No Docker or Docker Compose is used in this setup.
