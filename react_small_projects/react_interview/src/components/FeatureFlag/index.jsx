import { useContext } from "react"
import LightDarkMode from "../LightDarkToggle"
import TicTacToe from "../TicTacToe"
import Accordian from "../accordian"
import RandomColor from "../randomColor"
import { FeatureFlagsContext } from "./context"

export default function FeatureFlags () {
    const {loading,enableFlags}=useContext(FeatureFlagsContext)

    
    const ComponentsToRender=[
        {
            key:"showLightAndDarkMode",
            component : <LightDarkMode />
        },
        {
            key:"showTicTacToeBoard",
            component : <TicTacToe />
        }, {
            key:"showRandomColorGenerator",
            component : <RandomColor />
        }, {
            key:"showAccordian",
            component : <Accordian />
        }

    ]
    if(loading){
        return <h1>Loading Data Please wait </h1>
    }
    function checkEnabledFlags(getCurrentKey){
        return enableFlags[getCurrentKey]
    }
    
    return <div>
        <h1>Feature Flags</h1>
        {
            ComponentsToRender.map(componentItem =>checkEnabledFlags(componentItem.key)? componentItem.component : null)
        }
    </div>
}