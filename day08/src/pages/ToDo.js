import React, { useState,Fragment, useReducer } from "react";

function ToDo() {
    const [item, setItem] = useState("");
    // const [list,setList] = useState([]);
    const [list, setList] = useReducer(reducer, []); 

    function reducer (state, action) {
        switch (action.type) {
            case 'add':
                return [...state, action.value];

            case 'delete':
                state.splice(action.value, 1);
                return [...state];

            default:
                return state;
        }
    }

    const addItem = (action) => {
        setList(action);
        setItem("");
    }

    return(
        <>
            <br/>
            <input type="text" value={item} onChange={(event) =>setItem(event.target.value)}/>
            <button onClick={() => addItem({type: 'add', value: item})}>Add To List</button>
            {list.map((el,index) =>
                <Fragment key={index}>
                    <p>{el}</p>
                    <button onClick={()=> setList({type: 'delete', value: index})}>Delete Item</button>
                </Fragment>
            )}
        </>
    )
}
export default ToDo;