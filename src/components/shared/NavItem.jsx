import { Link } from "react-router";

export default function NavItem({ to, icon: Icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 hover:text-red-400 transition-colors"
    >
      <Icon /> {label}
    </Link>
  );
}
