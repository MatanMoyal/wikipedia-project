import { useState } from 'react';
import '../Styling/App.css'
import { Chart } from './Chart';
import { Content } from './Content/Content';
import { Description } from './Content/Description';

function App() {
  const [buttonClicked, setButtonClicked] = useState({ Arima: false, Decomposition: false, Regression: false, editViews: true });
  const [nameModel, setNameModel] = useState("editViews");
  const onClickedButton = (e) => {
    const isClicked = e.target.id;
    setNameModel(isClicked);
    setButtonClicked(p => {
      return Object.keys(p).reduce((CV, v) => {
        const current = isClicked === v ? { [isClicked]: true } : { [v]: false }
        return { ...CV, ...current };
      }, {})
    })
  }
  const OnEachModels = () => {
    return buttonClicked.editViews
      ? <div className="home-views">
        <Content nameModel={nameModel} />
      </div>
      : <>
        <Description nameModel={nameModel} />
        <Content nameModel={nameModel} />
      </>

  }
  return (
    <div className="app">
      <div className="container-app">
        <h1>
          Matan & Shachar Wikipedia Graduate Project
        </h1>
        <header>
          <div className="buttons">
            <button id="Arima" className={buttonClicked.Arima && "buttonClicked"} onClick={onClickedButton}>Arima</button>
            <button id="Decomposition" className={buttonClicked.Decomposition && "buttonClicked"} onClick={onClickedButton}>Decomposition</button>
            <button id="Regression" className={buttonClicked.Regression && "buttonClicked"} onClick={onClickedButton}>Regression</button>
            <button id="editViews" className={buttonClicked.editViews && "buttonClicked"} onClick={onClickedButton}>Home</button>
          </div>
        </header>
        <OnEachModels />
      </div>
    </div>
  )
}

export default App;
