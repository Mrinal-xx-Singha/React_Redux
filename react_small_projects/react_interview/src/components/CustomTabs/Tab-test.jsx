import Tabs from "./Tabs"
import "./Tabs.css"
const CustomTab = () => {

  const tabs=[
    {
    label:"Tab1",
    content: <div>This is Content for Tab 1</div>
    },
    {
      label:"Tab2",
      content: <div>This is Content for Tab 2</div>
      },
      {
        label:"Tab3",
        content: <div>This is Content for Tab 3</div>
        },
  ]

  function handleChange(currentTabIdx){
    console.log(currentTabIdx);

  }
  return (
    <Tabs  tabsContent={tabs}
    onChange={handleChange}
    />
  )
}

export default CustomTab