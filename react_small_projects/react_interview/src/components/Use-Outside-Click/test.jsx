import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef()
  UseOutsideClick(ref,()=>setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a Random Content</h1>
          <p>
            Please Click Outside of this. It won't close if you click inside
            this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
