import "../style.css";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css";

const Button = ({ style, title }) => {
  return (
    <button className="button" style={style}> {title} </button>
  );
};

export default Button;
