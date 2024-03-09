import { useState } from "react";
// import "./Tabs.css"
export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIdx, setCurrentTabIdx] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIdx(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem,index) => {
          return (
            <div
            className={`tab-item ${currentTabIdx === index ? "active" : ""}`}
            key={tabItem.label} onClick={()=>handleOnClick(index)}>
              <span className="label">{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content" style={{color:'red'}}>
        {tabsContent[currentTabIdx] && tabsContent[currentTabIdx].content}
      </div>
    </div>
  );
}
