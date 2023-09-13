import { useNavigate } from "react-router-dom";

function Opciones() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default Opciones;