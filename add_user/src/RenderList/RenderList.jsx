

 const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  



const RenderList = () => {




    
    const recArr = recipes.map((rec) =>{
        return <div key={rec.id}>
            <h2>{rec.name}</h2>
            <ul>
                {rec.ingredients.map(recype =>{
                    return <li key={recype}>{recype}</li>
                })}

            </ul>

        </div>
    })
  return (
    <div>{recArr}</div>
  )
}

export default RenderList