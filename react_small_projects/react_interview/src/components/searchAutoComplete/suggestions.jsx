export default function Suggestions({data,handleClick}){



    return <ul>
        {
            data && data.length ?
            data.map(item=><li
            className="suggestions_li"
            key={item.index}
            onClick={handleClick}
            >
                {item}

            </li>)
            
            :null
        }

    </ul>
}