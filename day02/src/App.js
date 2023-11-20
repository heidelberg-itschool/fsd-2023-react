import './App.css';
import Counter from './components/Counter';
import Loading from './components/Loading';
import Products from './components/Products';

function App() {
  const products = [{name:'scarf', id: 'afg2343'}, {name:'dress', id: '2343sds'}, {name:'skirt', id:'454dfd'}];

  function showAlert() {
    alert("You have clicked the button");
  }
  function showAlertWithText(text) {
    alert(`You have clicked the ${text} button`);
  }
  return (
    <div className="App">
      <Loading loading={false}></Loading>
      <Products products={[{name: 'one', id: '1'}]}></Products>
      <Products products={products}></Products>

      <Counter></Counter>

      <button onClick={showAlert}>Click me</button>
      <button onClick={() => showAlertWithText("submit")}>Submit</button>
      <button onClick={() => showAlertWithText("cancel")}>Cancel</button>
    </div>
  );
}

export default App;
