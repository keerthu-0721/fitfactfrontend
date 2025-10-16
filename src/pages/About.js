import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About FitFact</h1>
      <p className="about-tagline">"Your AI-Powered Truth Detector for Fitness Claims"</p>

      {/* What is FitFact */}
      <div className="about-card">
        <h2>🎯 What is FitFact?</h2>
        <p>
          FitFact is an intelligent fitness claim verification system that helps users separate fact from fiction in the world of health and fitness. Using advanced AI technology, FitFact analyzes fitness-related claims and provides accurate, science-backed explanations.
        </p>
        <p>
          In a world full of fitness myths and misleading information, FitFact serves as your trusted companion to make informed decisions about your health and wellness journey.
        </p>
      </div>

      {/* Key Features */}
      <div className="about-card">
        <h2>✨ Key Features</h2>
        <ul>
          <li>AI-powered claim analysis using Google's Gemini model</li>
          <li>Instant verification with detailed explanations</li>
          <li>Historical tracking of all analyzed claims</li>
          <li>User feedback system for continuous improvement</li>
          <li>Clean, intuitive interface for easy navigation</li>
          <li>Secure authentication and data storage</li>
        </ul>
      </div>

      {/* Technology Stack */}
      <div className="about-card">
        <h2>🛠️ Technology Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React with modern CSS for a responsive, interactive user experience</li>
          <li><strong>Backend:</strong> FastAPI for high-performance API endpoints and data processing</li>
          <li><strong>Database:</strong> SQLite for reliable and efficient data storage</li>
          <li><strong>AI Model:</strong> Google Gemini for intelligent claim verification and analysis</li>
        </ul>
      </div>

      {/* How It Works */}
      <div className="about-card">
        <h2>🎓 How It Works</h2>
        <ol>
          <li><strong>Submit a Claim:</strong> Enter any fitness or health-related statement you want to verify. It could be about diet, exercise, supplements, or general wellness.</li>
          <li><strong>AI Analysis:</strong> Our AI model processes your claim, cross-references it with scientific knowledge, and generates a comprehensive explanation.</li>
          <li><strong>Review Results:</strong> Get a clear verdict along with a detailed explanation that helps you understand the truth behind the claim.</li>
          <li><strong>Track History:</strong> All your analyzed claims are saved, allowing you to review them anytime and provide feedback for improvement.</li>
        </ol>
      </div>

      {/* Call to Action */}
      <div className="about-card cta-card">
        <h2>Ready to Verify Your First Claim?</h2>
        <p>Start making informed fitness decisions today!</p>
        <button onClick={() => window.location.href="/analyze"}>Start Analyzing →</button>
      </div>
    </div>
  );
};

export default About;
