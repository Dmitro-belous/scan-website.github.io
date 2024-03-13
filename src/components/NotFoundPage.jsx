import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
        This page doesn't exist. Go <Link to='/'>home</Link>
    </div>
  );
}

export default NotFoundPage;