import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to lerave feedback for a product or service</p>
          <p>Version 1.0.0</p>
          <p>Devloped By Taiwo</p>

          <p className="home-link">
            <Link to={"/"}>Back To Home</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;