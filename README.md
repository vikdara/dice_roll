# 🧩 Node.js — User & Community Dashboard API

This project is a backend API built with **Node.js** and **Express.js** to simulate a simple dashboard for managing users and communities.  
It includes REST API endpoints, in-memory data handling, and a DSA-based utility function with unit testing using **Jest**.

---

##  Project Overview

The backend provides:
- User Management (list, add)
- Community Details (with member info)
- One DSA Utility (`findCommonMembers`) with tests
- Proper error handling (400, 404)
- Modular folder structure and Jest test coverage

---

##  Tech Stack

- **Node.js** (v18+)
- **Express.js** (for REST API)
- **Jest + Supertest** (for testing)
- **In-memory arrays** (no database)

---

## 📂 Folder Structure

node_assigment/
│
├── index.js
├── package.json
├── README.md
│
├── routes/
│ ├── data.js
│ ├── users.js
│ └── communities.js
│
├── utils/
│ └── findCommonMembers.js
│
└── tests/
├── findCommonMembers.test.js
└── users.test.js



##  Installation and Setup

###  Clone the repository
```bash
git clone https://github.com/<vikdara>/nodeAssignment.git
cd nodejs-dashboard-task
 Install dependencies

npm install
 Start the server

npm start
 Server runs on:
http://localhost:4000

 Root Endpoint
GET /
Response:

{ "message": "Server is running successfully" }
 User Routes
GET /users
Returns all users.

Response Example:

[
  { "id": 1, "name": "Alice", "role": "Admin" },
  { "id": 2, "name": "Bob", "role": "Member" }
]
POST /users
Add a new user.
Body:

{ "name": "Charlie", "role": "Member" }
Response:

{ "id": 3, "name": "Charlie", "role": "Member" }
Error (Missing field):


{ "error": "Name and role are required" }
 Community Routes
GET /communities/:id
Returns community details along with user info.

Response Example:


{
  "id": 1,
  "name": "Developers Hub",
  "members": [
    { "id": 1, "name": "Alice", "role": "Admin" },
    { "id": 2, "name": "Bob", "role": "Member" }
  ]
}

json
Copy code
{ "error": "Community not found" }

 Error Handling
400 → Invalid or missing input (e.g. missing name or role)

404 → Invalid endpoint or missing community

All responses are in JSON format

DSA  Function
File: /utils/findCommonMembers.js

This function takes two arrays and returns the common members between them.

Function Definition

function findCommonMembers(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
  const set1 = new Set(arr1);
  return arr2.filter(x => set1.has(x));
}
Example:

findCommonMembers([1, 2, 3], [2, 3, 4]); // Output: [2, 3]
 Testing
We used Jest and Supertest for testing utilities and API endpoints.

Run tests:
npm test
Tests included:
✅ Positive case — common elements exist

🚫 Negative case — no common elements

🧩 Edge case — empty arrays

✅ API Test — GET /users endpoint returns valid data

Expected Output:


PASS  tests/findCommonMembers.test.js
PASS  tests/users.test.js
All tests passed ✅
