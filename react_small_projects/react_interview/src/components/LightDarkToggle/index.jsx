import "./styles.css"
import UseLocalStorage from "./UseLocalStorage"

const LightDarkMode = () =>{
    
    const [theme,setTheme]=UseLocalStorage('theme','dark')
    

    function handleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme);
    return(
        <div className="lightDark-container" data-theme={theme}>
            <div className="Light-Dark-App">
                <p>Hello World!</p>
                <button
                onClick={handleToggleTheme}
                >Change Theme</button>
            </div>

        </div>
    )

}

export default LightDarkMode