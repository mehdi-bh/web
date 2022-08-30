import './App.css';
import {useState} from "react";
import {EMPTY, AC, DEL, OPERATORS, NUMBERS, calculate} from "./utils";

function App() {
    const [previousOperand, setPreviousOperand] = useState(EMPTY);
    const [currentOperand, setCurrentOperand] = useState(EMPTY);
    const [operator, setOperator] = useState(EMPTY);
    const [afterEquals, setAfterEquals] = useState(false);

    const onClickDigit = (digit) => {
        if (previousOperand !== EMPTY && operator === EMPTY && currentOperand === EMPTY) return;

        if (afterEquals) {
            setCurrentOperand(digit);
            setAfterEquals(false);
        }
        else {
            if (currentOperand === NUMBERS.ZERO && digit === NUMBERS.ZERO) return;

            setCurrentOperand(currentOperand + digit);
        }
    }

    const onClickOperator = (op) => {
        if (operator !== EMPTY) {
            if (previousOperand !== EMPTY && currentOperand !== EMPTY) {
                setPreviousOperand(calculate(parseFloat(previousOperand), parseFloat(currentOperand), operator));
                setOperator(op);
                setCurrentOperand(EMPTY)
                return;
            }
            else if (previousOperand !== EMPTY) {
                setOperator(op);
                return;
            }

        }

        if (previousOperand === EMPTY) {
            setPreviousOperand(currentOperand);
            setOperator(op);
            setCurrentOperand(EMPTY);
        }
        else {
            if (currentOperand === EMPTY) {
                setOperator(op);
            }
            else {
                setPreviousOperand(calculate(previousOperand, currentOperand, op));
                setCurrentOperand(EMPTY);
                setOperator(EMPTY);
            }
        }
    }

    const onClickEquals = () => {
        if (previousOperand === EMPTY) return;

        const result = calculate(parseFloat(previousOperand), parseFloat(currentOperand), operator);
        setPreviousOperand(EMPTY);
        setCurrentOperand(result);
        setOperator(EMPTY)
        setAfterEquals(true);
    }

    const onDelete = () => {
        setCurrentOperand(currentOperand.substring(0, currentOperand.length - 1));
    }

    const onAC = () => {
        setPreviousOperand(EMPTY);
        setCurrentOperand(EMPTY);
        setOperator(EMPTY);
    }

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand + " " + operator}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>

            <button onClick={() => onAC()}                              className="span-two">{AC}</button>
            <button onClick={() => onDelete()}                          className="span-one">{DEL}</button>
            <button onClick={() => onClickOperator(OPERATORS.DIVIDE)}   className="span-one">{OPERATORS.DIVIDE}</button>
            <button onClick={() => onClickDigit(NUMBERS.ONE)}           className="span-one">{NUMBERS.ONE}</button>
            <button onClick={() => onClickDigit(NUMBERS.TWO)}           className="span-one">{NUMBERS.TWO}</button>
            <button onClick={() => onClickDigit(NUMBERS.THREE)}         className="span-one">{NUMBERS.THREE}</button>
            <button onClick={() => onClickOperator(OPERATORS.MULTIPLY)} className="span-one">{OPERATORS.MULTIPLY}</button>
            <button onClick={() => onClickDigit(NUMBERS.FOUR)}          className="span-one">{NUMBERS.FOUR}</button>
            <button onClick={() => onClickDigit(NUMBERS.FIVE)}          className="span-one">{NUMBERS.FIVE}</button>
            <button onClick={() => onClickDigit(NUMBERS.SIX)}           className="span-one">{NUMBERS.SIX}</button>
            <button onClick={() => onClickOperator(OPERATORS.PLUS)}     className="span-one">{OPERATORS.PLUS}</button>
            <button onClick={() => onClickDigit(NUMBERS.SEVEN)}         className="span-one">{NUMBERS.SEVEN}</button>
            <button onClick={() => onClickDigit(NUMBERS.EIGHT)}         className="span-one">{NUMBERS.EIGHT}</button>
            <button onClick={() => onClickDigit(NUMBERS.NINE)}          className="span-one">{NUMBERS.NINE}</button>
            <button onClick={() => onClickOperator(OPERATORS.MINUS)}    className="span-one">{OPERATORS.MINUS}</button>
            <button onClick={() => onClickDigit(NUMBERS.ZERO)}          className="span-two">{NUMBERS.ZERO}</button>
            <button onClick={() => onClickEquals()}                     className="span-two">=</button>
        </div>
    );
}

export default App;
