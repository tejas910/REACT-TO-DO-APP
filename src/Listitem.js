import React from "react";
import './Listitem.css'
function Listitem(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        return <div className="list" key={item.key}>
            <p>{item.text}
            <span className="icon" onClick={() => props.deleteItem(item.key)}>X</span>
            </p>
        </div>
    })
    return(
        <div>{listItems}</div>
    );
}
export default Listitem;