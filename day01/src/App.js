import './App.css';

function App() {
  const loggedIn = true;
  const products = ['scarf', 'dress', 'skirt'];
  const productsPrice = [{name: 'scarf', price: 30}, {name: 'dress', price: 40}, {name: 'skirt', price: 35}];
  const user = {name: 'Jon', surname: 'Doe'};

  function formatUser (user) {
    return `${upperFirstWord(user.name)} ${upperFirstWord(user.surname)}`;
  }

  function upperFirstWord (str) {
      const [first, ...others] = str.split('');             // Split returns array and separates all characters
      return [first.toUpperCase(), ...others].join('');     // Return string with all array elements joined
  };

  return (
    <div className="App"> 
      {/* notice is not class */}
      <header className="App-header">
        <h1>Welcome to Class 1</h1>
        <p>{loggedIn ? 'Hello ' + formatUser(user) : 'Please log in'}</p>
        {loggedIn ? <p>Hello user 2</p> : <p>Please log in 2</p>}
        {loggedIn && <div>
          <p>Here are your products</p>
          {products.map(product => <p>{product}</p>)}
          {productsPrice.map(product => <p>Product name: {product.name} | Product price: {product.price}</p>)}
        </div>
        }
      </header>
    </div>
  );
}

export default App;
