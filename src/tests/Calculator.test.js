import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let equalsButton;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button7;
  let runningTotal;
  let plusButton;
  let subtractButton;
  let multiplyButton;
  let divideButton;
  let clearButton;

  beforeEach(() => {
    container = render(<Calculator/>)
    equalsButton = container.getByTestId('operator-equals')
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button7 = container.getByTestId('number7');
    runningTotal = container.getByTestId('running-total');
    plusButton = container.getByTestId('operator-add');
    subtractButton = container.getByTestId('operator-subtract');
    multiplyButton = container.getByTestId('operator-multiply');
    divideButton = container.getByTestId('operator-divide');
    clearButton = container.getByTestId('clear')
  })
  
  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should be able to add 1 and 4', () => {
    fireEvent.click(button1)
    fireEvent.click(plusButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('5')
  })
  it('should be able to subtract 4 from 7 and get 3', () => {
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should be able to multiply 3 by 5 and get 15', () => {
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15')
  })
  it('should be able to divide 21 by 7 and get 3', () => {
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideButton)
    fireEvent.click(button7)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should be able to concatenate multiple number button clicks', () => {
    fireEvent.click(button1)
    fireEvent.click(button1)
    fireEvent.click(button1)
    fireEvent.click(button1)
    expect(runningTotal.textContent).toEqual('1111')
  })
  it('shoud be able to chain multiple operations together', () => {
    fireEvent.click(button2)
    fireEvent.click(button4)
    fireEvent.click(plusButton)
    fireEvent.click(button2)
    fireEvent.click(multiplyButton)
    fireEvent.click(button3)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('78')
  })
  it('should clear the running total', () => {
    fireEvent.click(button2)
    fireEvent.click(plusButton)
    fireEvent.click(button4)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('6')
    fireEvent.click(clearButton)
    fireEvent.click(clearButton)
    fireEvent.click(button2)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('10')
  })

})


/*- `calculator.add()` - add 1 to 4 and get 5
- `calculator.subtract()` subtract 4 from 7 and get 3
- `calculator.multiply()` - multiply 3 by 5 and get 15
- `calculator.divide()` - divide 21 by 7 and get 3
- `calculator.numberClick()` - concatenate multiple number button clicks
- `calculator.operatorClick()` - chain multiple operations together
- `calculator.clearClick()` - clear the running total without affecting the calculation */
