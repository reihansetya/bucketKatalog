import { useHover } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ButtonHighlight({ text, ...props }) {
  const [ref, hovering] = useHover();

  const buttonStyle = {
    background: hovering ? "#769FCD" : "rgba(144,180,206,0.85)",
    borderRadius: "10px 50px",
  };

  return (
    <>
      <Link
        className="btn alert alert-info w-50 text-center m-auto text-white"
        role="alert"
        style={buttonStyle}
        ref={ref}
        {...props}
      >
        {text}
      </Link>
    </>
  );
}

export default ButtonHighlight;
