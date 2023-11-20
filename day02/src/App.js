import './App.css';

function App() {
  const products = [{name:'scarf', id: 'afg2343'}, {name:'dress', id: '2343sds'}, {name:'skirt', id:'454dfd'}];
  const loading = true;
  function renderCorrectData() {
    return loading ? <h1>Spinner</h1> : <h1>This is your data</h1>;
  }
  function showAlert() {
    alert("You have clicked the button");
  }
  function showAlertWithText(text) {
    alert(`You have clicked the ${text} button`);
  }
  return (
    <div className="App">
      <p>{loading}</p>
      {renderCorrectData()}
      {products.map((product, index) => {
       return <p key={product.id} id={product.id}>{product.name}</p> 
      })}
      {/* don't use index */}

      <button onClick={showAlert}>Click me</button>
      <button onClick={() => showAlertWithText("submit")}>Submit</button>
      <button onClick={() => showAlertWithText("cancel")}>Cancel</button>
    </div>
  );
}

export default App;
