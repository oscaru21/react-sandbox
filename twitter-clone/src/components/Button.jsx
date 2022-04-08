import { Link } from "react-router-dom";
function Button({ to, color, size, Icon }) {
  return (
    <Link to={to}>
      <button
        className={`inline-flex justify-center items-center rounded-full h-${size * 4} w-${size*4} p-1 btn-ghost bg-white hover:bg-${color} hover:bg-opacity-25 grow-0`}
      >
        <Icon className={`text-${size == 1 ? "" : size}xl text-${color}`} />
      </button>
    </Link>
  );
}

export default Button;
