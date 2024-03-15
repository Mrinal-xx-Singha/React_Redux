import UseWindowResize from "."
import "./styles.css"


export default function UseWindowResizeTest (){

    const windowSize = UseWindowResize()
    const {width,height}=windowSize
    return(
        <div className="window_resize">
            <h1>Use Window Resize Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    )
}