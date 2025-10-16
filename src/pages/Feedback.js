import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Feedback.css";

const Feedback = () => {
  const { id } = useParams(); // claim id from URL
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      alert("Please enter your feedback before submitting.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`http://127.0.0.1:8000/feedback/${id}`, {
        feedback: feedback,
      });

      setSuccess(true);
      setFeedback("");
      setTimeout(() => navigate("/history"), 1500);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Give Feedback</h2>
      <p>Claim ID: {id}</p>

      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          placeholder="What do you think about this explanation?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="6"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      {success && <p className="success-message">Feedback submitted successfully ✅</p>}
    </div>
  );
};

export default Feedback;
