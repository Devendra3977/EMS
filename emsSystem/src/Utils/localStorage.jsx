const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Complete project report",
        "taskDate": "2025-01-20",
        "category": "Project",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Attend team meeting",
        "taskDate": "2025-01-21",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Review code changes",
        "taskDate": "2025-01-22",
        "category": "Review",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Ananya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Prepare presentation",
        "taskDate": "2025-01-19",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Send client email",
        "taskDate": "2025-01-20",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Update project plan",
        "taskDate": "2025-01-22",
        "category": "Planning",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Kavya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Fix bugs in the app",
        "taskDate": "2025-01-18",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Test app performance",
        "taskDate": "2025-01-19",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Rohan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Design new feature",
        "taskDate": "2025-01-20",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Client demo presentation",
        "taskDate": "2025-01-21",
        "category": "Demo",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Update website content",
        "taskDate": "2025-01-22",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Team collaboration",
        "taskDate": "2025-01-23",
        "category": "Collaboration",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 4,
      "newTask": 3,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Meera",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Update security patches",
        "taskDate": "2025-01-19",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Check server logs",
        "taskDate": "2025-01-20",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Monitor system performance",
        "taskDate": "2025-01-21",
        "category": "Monitoring",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 4",
        "taskDescription": "Deploy new version",
        "taskDate": "2025-01-22",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 4,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  }
];


const admin = [
  {
    "id": 1,
    "firstname": "Priya", // Added firstname
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage =()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage =()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return {employees, admin}
}
