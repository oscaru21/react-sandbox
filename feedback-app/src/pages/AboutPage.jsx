import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import { FcHome } from "react-icons/fc";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <Link to="/" className="about-link">
          <FcHome size={30} />
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
