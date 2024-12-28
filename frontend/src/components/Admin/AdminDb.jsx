import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDb.css";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/feedback", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        const sortedFeedbacks = sortFeedbacksByPriority(response.data);
        setFeedbacks(sortedFeedbacks);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeedbacks();
  }, []);

  const handleUpdate = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:4000/api/feedback/${id}`,
        { status },
        { headers: { Authorization: localStorage.getItem("token") } }
      );

      setFeedbacks((prevFeedbacks) =>
        prevFeedbacks.map((feedback) =>
          feedback._id === id ? { ...feedback, status } : feedback
        )
      );

      alert("Feedback updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/feedback/${id}`, {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     });
  //     alert("Complaint deleted successfully");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const sortFeedbacksByPriority = (feedbacks) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 }; // Define priority order
    return [...feedbacks].sort((a, b) => {
      const priorityA = priorityOrder[a.priority] || 4;
      const priorityB = priorityOrder[b.priority] || 4;
      return priorityA - priorityB;
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <ul className="feedback-list">
        {feedbacks.map((feedback) => (
          <li key={feedback._id} className="feedback-item">
            <div className="feedback-details">
              <p className="feedback-title">{feedback.title}</p>
              <p className="feedback-description">{feedback.description}</p>
              <p className="feedback-status">{feedback.status}</p>
              <p
                className={`feedback-priority ${
                  feedback.priority ? feedback.priority.toLowerCase() : "low"
                }`}
              >
                Priority: {feedback.priority || "Not Set"}
              </p>
              <p className="feedback-submission-date">{new Date(feedback.dateSubmitted).toLocaleDateString()}</p>
            </div>
            <div>
              <button
                className="dashboard-button update"
                onClick={() => handleUpdate(feedback._id, "In Progress")}
              >
                Mark In Progress
              </button>
              <button
                className="dashboard-button resolve"
                onClick={() => handleUpdate(feedback._id, "Resolved")}
              >
                Mark Resolved
              </button>
              {/* <button
                className="dashboard-button delete"
                onClick={() => handleDelete(feedback._id)}
              >
                Delete
              </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
