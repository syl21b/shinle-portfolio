import { useNavigate } from "react-router-dom";

export default function ProjectsSection() {
  const navigate = useNavigate();
  
  // Inside your button:
  <button
    className="view-detail-button"
    onClick={() => navigate(`/showcase/${project.id}`)}
  >
    View Detail
  </button>
}