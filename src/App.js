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
