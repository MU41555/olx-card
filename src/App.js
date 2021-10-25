import './App.css';
import RecipeReviewCard from "./myComponents.js/myCard";
import myArr from './myComponents.js/myArray';
import BasicButtons from './myComponents.js/button'

function App() {
  function MYcArd(val) {
    return (
      <RecipeReviewCard
        pName={val.name}
        des={val.discpriton}
        img={val.imge}
        pri={val.price}
      />
    );
  }
  return (
    <>
    <select name="" id="drop">
      <option value="">Select your categorize</option>
      <option value="">Men</option>
      <option value="">Chlid</option>
    </select>
      <div className="main">
        <BasicButtons />
        <div className="App">
          {myArr.map(MYcArd)}
        </div>
      </div>
    </>
  );
}

export default App;
