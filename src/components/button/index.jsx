import "./style.css";
import "assets/allstyles/all.css";

const Button = ({ style, title }) => {
  return (
    <div className="button" style={style}>
      <button className="button">{title}</button>
    </div>
  );
};

export default Button;
