import React, { useEffect, useRef } from "react";

function Child({products}) {
    const count = useRef(0);

    useEffect(() => {
        console.log(products);
    }, [products]);

    console.log('render child');
    return ( <>
        <h4>Child component</h4>
        <p> Nothing changed, but rendered: {count.current ++} time(s)</p>
        <p>{products}</p>
    </> );
}

export default React.memo(Child); // prevents unnecessary re-renders