import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>albumcito-tracker</h1>

      <Link to="/about">
        Acerca de
      </Link>
    </div>
  );
}