# Full Stack Car Application

## Overview
This project demonstrates a full stack application built with:
- **Backend**: C# .NET 8
- **Frontend**: React (TypeScript)
  
The application fulfills the following requirements:
1. A backend GET API that returns a list of cars, optionally filtered by the `make` query parameter.
2. A frontend page (`/`) that displays the returned car data in a table.
3. A background service that checks if car registrations are expired.
4. A SignalR-powered real-time table (`/registration`) displaying the registration status of cars (valid/expired). The first item will expire in 1 minute in the mock data.

Mock data is used in the backend to simplify the implementation.

## How to Run the Application

### 1. Clone the Repository
``` git clone "https://github.com/wuyan8908/plancare-test.git" ```
### 2. Backend Setup

1. **Navigate to the backend folder**:

- Restore dependencies:
``` dotnet restore ```
- Run the backend:
``` dotnet run ```

### 2. Frontend Setup

1. **Initialize and Run Frontend**:

- Install dependencies:
``` npm install ```
- Start the development server:
``` npm start ```

## Key Technologies Used
### Backend
- C# .NET 8
- SignalR for real-time updates
### Frontend
- React (TypeScript)
- Tailwind CSS for UI
- SignalR client for real-time communication

## Directory Structure
``` 
├── backend
│   ├── Controllers
│   │   └── CarsController.cs              # Handles car API requests
│   ├── Hubs
│   │   └── CarHub.cs                      # SignalR Hub for real-time communication
│   ├── Models
│   │   └── Car.cs                         # Represents the car data model
│   ├── Services
│   │   ├── MockData.cs                    # Mock car data
│   │   └── RegistrationCheckerService.cs  # Background service for expiration checks
└── └── Program.cs                         # Entry point for backend

├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── CarsTable.tsx              # Table for car list (@ '/')
│   │   │   └── RegistrationTable.tsx      # Real-time registration table (@ '/registration')
└── └── └── App.tsx                        # Main app with routes
```

