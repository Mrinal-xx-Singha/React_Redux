import { useRef } from "react";
import useFetch from "../useFetch";
import "./styles.css"

const ScrollToTopAndBottom = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null)

  function handleScrollTOTop () {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
  }
  function handleScrollToBottom () {
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  }

  if (error) {
    return <h1>Error occured</h1>;
  }
  if (loading) {
    return <h1>Loading Please wait</h1>;
  }
 

  return (
    <div className="scroll-to-top-and-bottom">
      <h1>Scroll to top and Bottom Feature</h1>
      <h3>This is the Top Section</h3>
      <button
      onClick={handleScrollToBottom}
      >Scroll to bottom</button>

      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li
          key={item.id}
          >{item.title}</li>)
          : null}
      </ul>
      <button
      onClick={handleScrollTOTop}
      >Scroll To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
