import './App.css';

function App() {
  return (
    <div className="calculator-grid">
        <div className="output">
            <div className="previous-operand">123+</div>
            <div className="current-operand">555</div>
        </div>

        <button className="span-two">AC</button>
        <button className="span-one">DEL</button>
        <button className="span-one">/</button>
        <button className="span-one">1</button>
        <button className="span-one">2</button>
        <button className="span-one">3</button>
        <button className="span-one">*</button>
        <button className="span-one">4</button>
        <button className="span-one">5</button>
        <button className="span-one">6</button>
        <button className="span-one">+</button>
        <button className="span-one">7</button>
        <button className="span-one">8</button>
        <button className="span-one">9</button>
        <button className="span-one">-</button>
        <button className="span-one">.</button>
        <button className="span-one">0</button>
        <button className="span-two">=</button>
    </div>
  );
}

export default App;
