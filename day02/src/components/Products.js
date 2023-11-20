function Products({products}) {

    return (<>
        {products.map((product, index) => {
        return <p key={product.id} id={product.id}>{product.name}</p> 
       })}
       {/* don't use index */}
    </>);
}

export default Products;