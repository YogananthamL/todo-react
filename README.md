# 3-Tier Todo Application

A full-stack todo application with React frontend, Django backend, and PostgreSQL database.

## Architecture

- **Frontend**: React (Single Page Application)
- **Backend**: Django REST Framework
- **Database**: PostgreSQL

## Project Structure

```
todo-react/
├── frontend/          # React application
├── backend/           # Django application
├── docker-compose.yml # Docker orchestration
└── README.md
```

## Prerequisites

- Docker & Docker Compose
- Node.js 16+ (for local frontend development)
- Python 3.9+ (for local backend development)
- PostgreSQL 13+ (if running without Docker)

## Quick Start with Docker

```bash
docker-compose up --build
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Admin Panel: http://localhost:8000/admin

## Local Development Setup

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `GET /api/todos/` - List all todos
- `POST /api/todos/` - Create a new todo
- `GET /api/todos/{id}/` - Retrieve a todo
- `PUT /api/todos/{id}/` - Update a todo
- `DELETE /api/todos/{id}/` - Delete a todo

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Filter todos by status
- Responsive UI
- Real-time updates

## Contributing

Feel free to submit issues and enhancement requests!
