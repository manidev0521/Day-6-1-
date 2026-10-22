import { Link } from "react-router";

export default function Home() {
  return (
    <div className="container">
      <h1>Hi, I'm Manikandan A</h1>
      <h2>Software Engineer</h2>
      <p>Welcome to my personal portfolio website.</p>

      <Link to="/projects" className="btn">
        View Projects
      </Link>
    </div>
  );
}