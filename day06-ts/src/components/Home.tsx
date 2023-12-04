import { useEffect, useState } from 'react';
import User from '../models/User';

function Home(props: {user: User}) {
    const [products, setProduct] = useState<string[]>([]);

    useEffect(() => {
        setProduct(['product1', 'product2']);
    }, []);

    return ( <>
        <h1>Home</h1>
        <p>User is: {props.user.name} {props.user.surname}</p>
        <p>His age is: {props.user.age}</p>
        {props.user.email &&  <p>His email is: {props.user.email}</p>}
        {products.map(product => <p key={product}>{product}</p>)}
    </>);
}

export default Home;