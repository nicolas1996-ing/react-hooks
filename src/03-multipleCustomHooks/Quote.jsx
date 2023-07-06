import React, { useRef, useState } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ title, description }) => {
  // useRef
  const pRef = useRef();
  const [paragraphSize, setParagraphSize] = useState({ width: 0, hight: 0 });

  // useEffect: cambios en el renderizado
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    console.log(pRef.current.getBoundingClientRect());
    setParagraphSize({ width, height });
  }, [description]);

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: "flex", flexDirection: "column" }}
        ref={pRef}
      >
        <p className="mb-1">{title}</p>
        <footer className="blockquote-footer mt-1"> {description} </footer>
      </blockquote>

      <div className="mb-2">
        <code>{JSON.stringify(paragraphSize)}</code>
        <pre>{JSON.stringify(paragraphSize)}</pre>
      </div>
    </>
  );
};
