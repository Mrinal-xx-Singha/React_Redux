import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam,setSearchParam]=useState('')
    const[loading,setLoading]=useState(false)
    const [recipeList,setRecipeList]=useState([])
    const[recipeDetailsData,setRecipeDetailsData]=useState(null)
    const [favoriites,setFavorites]=useState([])



    async function handleSubmit (event){
        event.preventDefault()
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const  data= await res.json()
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
            }

        }catch(e){
            console.log(e);
            setLoading(false)
            setSearchParam('')
        }
    }
    function handleAddToFavorite(getCurrentItem){
        console.log(getCurrentItem);

        let cpyFavoritesList = [...favoriites];
        const index = cpyFavoritesList.findIndex(item =>item.id === getCurrentItem.id)


        if(index === -1){
            cpyFavoritesList.push(getCurrentItem)
        }else{
            cpyFavoritesList.splice(index)

        }
        setFavorites(cpyFavoritesList)
    }

    return <GlobalContext.Provider
    value={{searchParam,loading,recipeList,
       handleAddToFavorite, favoriites
        ,recipeDetailsData,setRecipeDetailsData,setSearchParam,handleSubmit}}
    >{children}</GlobalContext.Provider>;
}
