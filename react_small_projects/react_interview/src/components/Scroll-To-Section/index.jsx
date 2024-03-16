import { useRef } from "react";

/* eslint-disable react/jsx-key */
export default function ScrollToSection() {

    const ref =useRef()

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
  ];
  function handleScrollToSection(){
    let position =ref.current.getBoundingClientRect().top

    window.scrollTo({
        top:position,
        behavior:"smooth"
    })
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Scroll to a particular section</h1>
      <button style={{padding:"10px 15px", borderRadius:"5px",marginBottom:"10px"}}
      onClick={handleScrollToSection}
      >Click To Scroll </button>
      {data.map((dataItem,index) => (

        <div
        ref={index === 3? ref : null}
        style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
