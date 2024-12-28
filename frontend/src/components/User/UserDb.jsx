import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserDb.css';

const FeedbackSubmissionForm = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
 const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Product', // Default value
    priority: 'Low', // Default value
  });

 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title || !formData.description) {
      setError('All fields are required.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Unauthorized. Please log in.');
        return;
      }

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/feedback`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('Server response: ', response.data);
      setSuccess('Feedback submitted successfully!');
      setError('');
      setFormData({
        title: '',
        description: '',
        category: 'Product',
        priority: 'Low',
      });

      setTimeout(() => {
        navigate('/login');  // Redirect to the login page
      }, 2000);
    } catch (err) {
      console.error('API Error: ', err.response || err.message);
      setError('Error Submitting Feedback. PLease try again');
      console.log("Error: ", err);

    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Feedback</h2>

      <p>Use the form below to submit your feedback. We value your input.</p>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Feedback Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter feedback title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of your feedback"
            required
          />
        </div>

        {/* Feedback Category */}
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Product">Product</option>
            <option value="Service">Service</option>
            <option value="Support">Support</option>
          </select>
        </div>

        {/* Feedback Priority */}
        <div className="form-group">
          <label>Priority:</label>
          <div className="priority-opts">
            <label>
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={formData.priority === 'Low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={formData.priority === 'Medium'}
                onChange={handleChange}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="High"
                checked={formData.priority === 'High'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackSubmissionForm;
