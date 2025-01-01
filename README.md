## FeedbackManagement

This project The Feedback Management System is a full-stack web application for submitting and managing user feedback. Users can submit feedback related to products, services, or support, categorizing it by type and priority. The system includes user authentication and basic data validation. Upon successful submission, users are redirected to the login page after a short delay.
The admin has access to a dashboard where feedback can be viewed, updated, and sorted by priority. Admins can mark feedback as "In Progress" or "Resolved," helping streamline feedback management and resolution.
---

## Frontend

### Tech Stack: 
-React.js
-Axios
-CSS

### Features:
1. Feedback submission form with title, description, category, and priority.
2. Basic validation and error handling, loading state during submission.
3. Redirection to the login page after few seconds of successful submission.
4. Admin dashboard to view and manage feedback.


### Frontend-deployement

1. Navigate to the backend directory. 
```bash
 git clone https://github.com/Ishimistic/FeedbackManagement.git
cd FeedbackManagement
```

2. Install dependencies:
```bash
npm install
```

4. Set up environment variables in .env:
```bash
REACT_APP_BACKEND_URL=4000
```

3. Start the react app
```bash
npm start
```

4. Access the frontend at http://localhost:3000.


## Backend

##Tech Stack: 
-Node.js
-Express
-MongoDB
-JWT

## Features:
1. REST API for feedback submission.
2. JWT authentication for secure feedback submission.
3. Basic error handling.

## Backend-deployement

1. Navigate to the backend directory. 
```bash
 cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in .env:
```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=4000
```

4. Start the backend server:
bash
npm run dev

5. The backend API will be available at http://localhost:4000.

## Folder Structure 
```bash
FeedbackManagement/
│
├── frontend/                   # React frontend
├── backend/                    # Node.js Express backend
```

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.
