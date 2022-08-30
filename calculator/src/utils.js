export const EMPTY = "";
export const AC = "AC";
export const DEL = "DEL";

export const OPERATORS = {
    EQUALS : "=",
    PLUS : "+",
    MINUS : "-",
    DIVIDE : "/",
    MULTIPLY : "*"
};

export const NUMBERS = {
    ZERO : "0",
    ONE : "1",
    TWO : "2",
    THREE : "3",
    FOUR : "4",
    FIVE : "5",
    SIX : "6",
    SEVEN : "7",
    EIGHT : "8",
    NINE : "9",
}

export const calculate = (a, b, op) => {
    switch (op) {
        case OPERATORS.PLUS:
            return a + b;
        case OPERATORS.MINUS:
            return a - b;
        case OPERATORS.MULTIPLY:
            return a * b;
        case OPERATORS.DIVIDE:
            return a / b;
        default:
            return EMPTY;
    }
}