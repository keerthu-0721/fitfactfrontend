// import { useState } from "react";
// import "../styles/Analyze.css";

// const Analyze = () => {
//   const [claim, setClaim] = useState("");
//   const [result, setResult] = useState(null);

//   const handleAnalyze = async () => {
//     if (!claim) return alert("Please enter a claim");

//     try {
//       const res = await fetch("http://127.0.0.1:8000/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ claim }),
//       });
//       const data = await res.json();
//       setResult(data);
//     } catch (err) {
//       alert("Error connecting to backend");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="analyze-container">
//       <textarea
//         placeholder="Enter your fitness claim..."
//         value={claim}
//         onChange={(e) => setClaim(e.target.value)}
//       />
//       <button onClick={handleAnalyze}>Analyze Claim</button>

//       {result && (
//         <div className="result-box">
//           <h3>Verdict: {result.verdict}</h3>
//           <p><strong>Explanation:</strong> {result.explanation}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analyze;

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Analyze.css";

// const Analyze = () => {
//   const [claim, setClaim] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = async () => {
//     if (!claim.trim()) return;
//     setLoading(true);

//     try {
//       const res = await axios.post("http://127.0.0.1:8000/analyze", { claim });
//       setResult(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to analyze claim. Backend not connected?");
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <div className="analyze-container">
//       <h1>Claim Analyzer</h1>
//       <textarea
//         placeholder="Enter your fitness claim..."
//         value={claim}
//         onChange={(e) => setClaim(e.target.value)}
//         rows="4"
//       />
//       <button onClick={handleAnalyze} disabled={loading}>
//         {loading ? "Analyzing..." : "Analyze Claim"}
//       </button>

//       {result && (
//         <div className="result-card">
//           <h2>Claim:</h2>
//           <p>{result.claim}</p>

//           <div className="feature-row">
//             <div className="feature">
//               <h3>Verdict</h3>
//               <p>{result.verdict}</p>
//             </div>
//             <div className="feature">
//               <h3>Confidence</h3>
//               <p>{result.confidence}</p>
//             </div>
//             <div className="feature">
//               <h3>Toxicity</h3>
//               <p>{result.toxicity}</p>
//             </div>
//           </div>

//           <h3>Explanation</h3>
//           <p>{result.explanation}</p>

//           <h3>Trusted Sources</h3>
//           <ul>
//             {result.trusted_sources?.map((src, idx) => (
//               <li key={idx}>{src}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analyze;
// import React, { useState } from "react";
// import "../styles/Analyze.css";

// const AnalyzeDemo = () => {
//   const [claim, setClaim] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = () => {
//     if (!claim.trim()) return;
//     setLoading(true);

//     setTimeout(() => {
//       const mockResult = {
//         claim: claim,
//         explanation:
//           "Green tea contains bioactive compounds called catechins, particularly EGCG (Epigallocatechin gallate), which can slightly boost metabolism and promote fat oxidation. Some studies suggest that drinking green tea regularly may support modest fat loss, but it does not specifically target belly fat. Overall fat reduction depends more on a calorie deficit, exercise, and diet. Green tea can be a supportive addition, but it cannot replace regular exercise or healthy eating.",
//         verdict: "Partially true",
//         confidence: Math.floor(Math.random() * 30 + 70) + "%",
//         trusted_sources: ["PubMed", "Healthline", "Harvard Health"],
//         toxicity: "Low"
//       };
//       setResult(mockResult);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="analyze-container">
//       <h1>Claim Analyzer (Demo)</h1>
//       <textarea
//         placeholder="Enter your fitness claim..."
//         value={claim}
//         onChange={(e) => setClaim(e.target.value)}
//         rows="4"
//       />
//       <button onClick={handleAnalyze} disabled={loading}>
//         {loading ? "Analyzing..." : "Analyze Claim"}
//       </button>

//       {result && (
//         <div className="result-card">
//           <h2>Claim:</h2>
//           <p>{result.claim}</p>

//           <div className="feature-row">
//             <div className="feature">
//               <h3>Verdict</h3>
//               <p>{result.verdict}</p>
//             </div>
//             <div className="feature">
//               <h3>Confidence</h3>
//               <p>{result.confidence}</p>
//             </div>
//             <div className="feature">
//               <h3>Toxicity</h3>
//               <p>{result.toxicity}</p>
//             </div>
//           </div>

//           {/* Explanation Card */}
//           <div className="info-card">
//             <h3>Explanation</h3>
//             <p>{result.explanation}</p>
//           </div>

//           {/* Trusted Sources Card */}
//           <div className="info-card">
//             <h3>Trusted Sources</h3>
//             <ul>
//               {result.trusted_sources.map((src, idx) => (
//                 <li key={idx}>{src}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnalyzeDemo;
// demo 
import React, { useState } from "react";
import "../styles/Analyze.css";

const AnalyzeDemo = () => {
  const [claim, setClaim] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Predefined claims
  const predefinedClaims = {
    "green tea burns belly fat": {
      claim: "Green tea burns belly fat",
      explanation:
        "Green tea contains bioactive compounds called catechins, particularly EGCG, which can slightly boost metabolism and promote fat oxidation. It does not specifically target belly fat; overall fat loss depends on calorie deficit, exercise, and diet.",
      verdict: "Partially true",
      confidence: "82%",
      trusted_sources: [
        "Harvard Health",
        "PubMed",
        "Healthline"
      ],
      toxicity: "Low"
    }
  };

  const handleAnalyze = () => {
    if (!claim.trim()) return;
    setLoading(true);

    setTimeout(() => {
      const key = claim.toLowerCase().trim();
      if (predefinedClaims[key]) {
        // Use predefined claim
        setResult(predefinedClaims[key]);
      } else {
        // Mock AI-style result for user claims
        const mockResult = {
          claim: claim,
          explanation:
            "This is a demo explanation. In a real scenario, the AI would analyze the claim and provide a science-backed explanation.",
          verdict: "Partially true",
          confidence: Math.floor(Math.random() * 30 + 70) + "%",
          trusted_sources: ["PubMed", "Healthline"],
          toxicity: "Low"
        };
        setResult(mockResult);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="analyze-container">
      <h1>Claim Analyzer </h1>
      <textarea
        placeholder="Enter your fitness claim..."
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        rows="4"
      />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Claim"}
      </button>

      {result && (
        <div className="result-card">
          <h2>Claim:</h2>
          <p>{result.claim}</p>

          <div className="feature-row">
            <div className="feature">
              <h3>Verdict</h3>
              <p>{result.verdict}</p>
            </div>
            <div className="feature">
              <h3>Confidence</h3>
              <p>{result.confidence}</p>
            </div>
            <div className="feature">
              <h3>Toxicity</h3>
              <p>{result.toxicity}</p>
            </div>
          </div>

          {/* Explanation Card */}
          <div className="info-card">
            <h3>Explanation</h3>
            <p>{result.explanation}</p>
          </div>

          {/* Trusted Sources Card */}
          <div className="info-card">
            <h3>Trusted Sources</h3>
            <ul>
              {result.trusted_sources.map((src, idx) => (
                <li key={idx}>{src}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyzeDemo;

// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/Analyze.css";

// const Analyze = () => {
//   const [claim, setClaim] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = async () => {
//     if (!claim.trim()) return;
//     setLoading(true);

//     try {
//       // Send claim to backend
//       const response = await axios.post("http://127.0.0.1:8000/analyze", {
//         claim: claim
//       });

//       // Backend response should include: claim, explanation, verdict, confidence, trusted_sources, toxicity
//       setResult(response.data);
//     } catch (error) {
//       console.error("Error analyzing claim:", error);
//       alert("Failed to connect to backend. Check server or network.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="analyze-container">
//       <h1>Claim Analyzer</h1>
//       <textarea
//         placeholder="Enter your fitness claim..."
//         value={claim}
//         onChange={(e) => setClaim(e.target.value)}
//         rows="4"
//       />
//       <button onClick={handleAnalyze} disabled={loading}>
//         {loading ? "Analyzing..." : "Analyze Claim"}
//       </button>

//       {result && (
//         <div className="result-card">
//           <h2>Claim:</h2>
//           <p>{result.claim}</p>

//           <div className="feature-row">
//             <div className="feature">
//               <h3>Verdict</h3>
//               <p>{result.verdict}</p>
//             </div>
//             <div className="feature">
//               <h3>Confidence</h3>
//               <p>{result.confidence}</p>
//             </div>
//             <div className="feature">
//               <h3>Toxicity</h3>
//               <p>{result.toxicity}</p>
//             </div>
//           </div>

//           <div className="info-card">
//             <h3>Explanation</h3>
//             <p>{result.explanation}</p>
//           </div>

//           <div className="info-card">
//             <h3>Trusted Sources</h3>
//             <ul>
//               {result.trusted_sources.map((src, idx) => (
//                 <li key={idx}>{src}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analyze;
