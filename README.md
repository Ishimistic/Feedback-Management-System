# FeedbackManagement

The **Feedback Management System** is a full-stack web application for submitting and managing user feedback. Users can submit feedback related to products, services, or support, categorizing it by type and priority. The system includes user authentication and basic data validation. Upon successful submission, users are redirected to the login page after a short delay.

Admins have access to a dashboard where feedback can be viewed, updated, and sorted by priority. Admins can mark feedback as "In Progress" or "Resolved," helping streamline feedback management and resolution.

The frontend is built with **React**, and the backend is developed using **Node.js**, **Express**, and **MongoDB** for storing feedback data.

---

## Frontend

### Tech Stack
- React.js
- Axios
- CSS

### Features
1. Feedback submission form with fields for title, description, category, and priority.
2. Basic validation and error handling, with a loading state during submission.
3. Redirection to the login page after a few seconds of successful submission.
4. Admin dashboard to view and manage feedback.

---

## Backend

### Tech Stack
- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)

### Features
1. REST API for feedback submission.
2. JWT authentication for secure feedback submission.
3. Basic error handling.

---

## Deployment Instructions

### Frontend Deployment

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/Ishimistic/FeedbackManagement.git
   cd FeedbackManagement

