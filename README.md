# LMS

LMS is a Learning Management System that aims to streamline course management, user roles, and resource distribution for educational institutions. Built with C# .NET for the backend and React for the frontend, the project ensures efficient performance and a user-friendly interface.

---

## Project Goals

1. Develop a scalable LMS to simplify educational administration.
2. Provide role-based access for users, such as administrators, teachers, and students.
3. Enable efficient course and resource management through modern web technologies.

---

## Features

### General Features
- **User Management**: Role-based authentication and authorization.
- **Course Management**: Add, update, delete, and assign courses to users.
- **Resource Sharing**: Upload and manage course materials.
- **API Integration**: RESTful API for communication between the client and server.
- **Responsive Design**: Optimized for use across different devices.

### Features in the `test` Branch
- **Enhanced User Roles**: Experimental additions for user permissions.
- **Improved Course Scheduling**: A more dynamic scheduling system.
- **Optimized APIs**: Performance enhancements for faster response times.
- **UI/UX Updates**: Additional interface refinements and interactivity improvements.

---

## Database Schema

The application includes (among others) the following entities in its database:
1. **Users**: Stores user details, including role distinctions (Admin, Teacher, Student).
2. **Courses**: Contains information about courses such as title, description, and schedule.
3. **Enrollments**: Tracks which users are enrolled in specific courses.
4. **Resources**: Manages uploaded files and resources for each course.

---

## Technologies Used

### Backend
- **C# .NET Core**: For the RESTful API and backend logic.
- **Entity Framework**: ORM for database interactions.

### Frontend
- **React**: For building the dynamic UI.
- **TypeScript**: Ensures type safety and maintainable code.
- **Vite**: Fast build tool for modern web applications.

### Database
- **SQL Server**: Used for data persistence.

### Development Tools
- **Visual Studio**: Preferred IDE for backend development.
- **VS Code**: IDE for frontend development.

---

## Setup Instructions

### Prerequisites
- Install [Visual Studio](https://visualstudio.microsoft.com/) for backend development.
- Install [Node.js](https://nodejs.org/) and a package manager (npm/yarn) for frontend setup.
- Install [SQL Server](https://www.microsoft.com/sql-server/) for the database.

---

### Backend (Server)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/KikiBerg/LMS.git
    cd LMS/Server
    ```

2. **Switch branches (if needed)**:
    ```bash
    git checkout test
    ```

3. **Open the solution**:
   Open `LMS.sln` in Visual Studio.

4. **Set up the database**:
   - Update the connection string in `appsettings.json` within the `LMS.API` project.
   - Apply migrations to create the database schema:
     ```bash
     dotnet ef database update
     ```

5. **Run the server**:
   - Press `F5` in Visual Studio or execute:
     ```bash
     dotnet run
     ```

---

### Frontend (Client)

1. **Navigate to the client directory**:
    ```bash
    cd LMS/Client
    ```

2. **Switch branches (if needed)**:
    ```bash
    git checkout test
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Access the application**:
   Open your browser at `http://localhost:5173`.

---

## Running the Application

1. Start the backend server from Visual Studio or using the terminal.
2. Start the frontend client.
3. Open your browser and navigate to `http://localhost:5173` to access the application.
4. Log in with an appropriate user account or register a new one.

---

## Contribution Guidelines

We welcome contributions! Please follow these steps:
1. **Branch Workflow**: Create a feature branch from `master` or `test` as appropriate.
2. **Pull Requests**: Submit pull requests with clear documentation of changes.
3. **Issues**: Report bugs or suggest features by opening issues.

---

*Note*: Ensure you are working on the correct branch (`master` or `test`) to match the required functionality or features.

---

Enjoy exploring and contributing to LMS! 🚀
