import React from "react";
import { useState, useEffect } from "react";

function ToastNotif({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!visible ? (
        <div
          className={`alert alert-${type} position-sticky bottom-0 end-0 m-3`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {message}
        </div>
      ) : null}
    </>
  );
}

export default ToastNotif;
