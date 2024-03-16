import RecipeItem from "../../components/navbar/RecipeItem";
import { GlobalContext } from "../../context";
import { useContext } from "react";
const  Favourites= () => {
  const { favoriites } = useContext(GlobalContext);


  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriites && favoriites.length > 0 ? (
        favoriites.map((item) => <RecipeItem item={item} />)
      ) : (
        
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is Added in favorites
          </p>
        </div>
      )}
    </div>
  );
}

export default Favourites