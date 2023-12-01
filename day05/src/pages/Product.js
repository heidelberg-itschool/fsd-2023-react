import { useParams } from "react-router-dom";

function Product() {
    const params = useParams();
    console.log(params);
    return ( <h1>Product page</h1> );
}

export default Product;