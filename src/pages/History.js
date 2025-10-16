// import { useEffect, useState } from "react";
// import "../styles/History.css";

// const History = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/history")
//       .then((res) => res.json())
//       .then((data) => setHistory(data))
//       .catch(() => console.error("Error fetching history"));
//   }, []);

//   return (
//     <div className="history-container">
//       <h2>Claim History</h2>
//       {history.length === 0 ? (
//         <p>No history available</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Claim</th>
//               <th>Verdict</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {history.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.claim}</td>
//                 <td>{item.verdict}</td>
//                 <td>{new Date(item.created_at).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/History.css";

const History = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/history");
        setHistory(res.data);
      } catch (err) {
        console.error("Failed to fetch history", err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h1>Claim History</h1>
      {history.map((item) => (
        <div key={item.id} className="history-card">
          <h2>Claim:</h2>
          <p>{item.claim}</p>

          <div className="feature-row">
            <div className="feature">
              <h3>Verdict</h3>
              <p>{item.verdict}</p>
            </div>
            <div className="feature">
              <h3>Confidence</h3>
              <p>{item.confidence}</p>
            </div>
            <div className="feature">
              <h3>Toxicity</h3>
              <p>{item.toxicity}</p>
            </div>
          </div>

          <h3>Explanation</h3>
          <p>{item.explanation}</p>

          <h3>Trusted Sources</h3>
          <ul>
            {item.trusted_sources?.map((src, idx) => (
              <li key={idx}>{src}</li>
            ))}
          </ul>

          <p className="date">
            <em>Analyzed on: {new Date(item.created_at).toLocaleString()}</em>
          </p>

          {/* /* Feedback Button
          <div className="feedback-btn-container">
            <button
              className="feedback-btn"
              onClick={() => navigate(`/feedback/${item.id}`)}
            >
              Give Feedback
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default History;
