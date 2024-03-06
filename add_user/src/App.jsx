/* eslint-disable react/jsx-key */

import ComponentA from './UseContext/ComponentA'
import Counter from './features/counter/Counter'
import MyRefComponent from './useRef/MyRefComponent'
import RenderList from './RenderList/RenderList'
import List from './RenderList/updateList/List'

import Carousel from './carousel/Carousel'

// import DigitalClock from './DigitalClock/DigitalClock'

const App = () => {
  

  const carouselItems =[
    <img src="https://images.unsplash.com/photo-1709589865176-7c6ede164354?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First" />,
    <img src="https://images.unsplash.com/photo-1709310875357-dd82b6a761c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second" />,
    <img src="https://images.unsplash.com/photo-1682686581362-796145f0e123?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Third" />,
  ]
  return (
    <>
      {/* <DigitalClock /> */}
      {/* <ComponentA /> */}
      {/* <MyRefComponent /> */}
      {/* <Counter/> */}
      {/* <RenderList /> */}
      {/* <List/> */}
      <Carousel items={carouselItems}/>
    </>
  )
}

export default App