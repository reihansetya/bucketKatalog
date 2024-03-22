import { Link } from "react-router-dom";
import { useHover } from "@uidotdev/usehooks";

// eslint-disable-next-line react/prop-types
function ButtonProduct({ text, style, className, state, ...props }) {
  const [ref, hovering] = useHover();

  const buttonStyle = {
    background: hovering ? "rgba(118, 159, 205,0.75)" : "rgba(118, 159, 205)",
  };

  return (
    <Link
      ref={ref}
      state={state}
      style={{ ...buttonStyle, ...style }}
      className={`btn text-white ${className}`}
      {...props}
    >
      {text}
    </Link>
  );
}

export default ButtonProduct;
