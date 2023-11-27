import React, { useState,Fragment } from "react";

function Exercise2() {
    const [item, setItem] = useState("");
    const [list,setList] = useState([]);

    const addItem = () => {
        setList([...list,item]);
        setItem("");
    }

    function deleteItem(index) {
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
    }

    return(
        <>
            <input type="text" value={item} onChange ={(event) =>setItem(event.target.value)}/>
            <button onClick={addItem}>Add To List</button>
            {list.map((el,index) =>
                <Fragment key={index}>
                    <p>{el}</p>
                    <button onClick={()=> deleteItem(index)}>Delete Item</button>
                </Fragment>
            )}
        </>
    )
}
export default Exercise2;