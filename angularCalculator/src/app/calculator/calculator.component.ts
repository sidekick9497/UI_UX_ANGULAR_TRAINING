import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  inputEleOne: HTMLInputElement;
  inputEleTwo: HTMLInputElement;
  outputEle: HTMLInputElement;
  infoEle: HTMLElement;
  output = 'Result here';
  isValid = true;
  message = '';
  constructor() { }

 calc(inputEleOne: HTMLInputElement, inputEleTwo: HTMLInputElement, buttonSign: string, infoEle: HTMLElement ): void {
    let result: number;
    this.inputEleOne = inputEleOne;
    this.inputEleTwo = inputEleTwo;
    this.infoEle = infoEle;
    console.log('button clicked');
    console.log(buttonSign);
    const [numberOne, numberTwo] = this.getInputs();

    if (this.validate()) {
        switch (buttonSign) {
            case '+':
                console.log('addition performed');
                result = numberOne + numberTwo; break;
            case '-':
                console.log('subtration performed');
                result = numberOne - numberTwo; break;
            case '/':
                console.log('division performed');
                result = numberOne / numberTwo; break;
            case '*':
                console.log('multiplication performed');
                result = numberOne * numberTwo; break;
            default:
                console.log('invalid method'); break;

        }
        this.isValid = true;
    }
    if (!this.isValid)
    {
      this.output = '';
    }
    console.log(result);
    if (result != null) {
         this.output = '' + result;
    }

  }
  getInputs(): number[] {
    // tslint:disable-next-line: radix
    const inputOne: number = parseInt(this.inputEleOne.value);
    // tslint:disable-next-line: radix
    const inputTwo: number = parseInt(this.inputEleTwo.value);

    return [inputOne, inputTwo];
  }

  validate(): boolean {
    const numberOne = this.inputEleOne.value;
    const numberTwo = this.inputEleTwo.value;
    console.log(numberOne);
    if (numberOne === '') {
      console.log('empty input one');
      this.message  = 'Enter number one';
      this.isValid = false;
      return false;
    } else if (numberTwo === '') {
        console.log('empty input two');
        this.message  = 'Enter number two';
        this.isValid = false;
        return false;
    }

    if (this.checkForLetter((numberOne)) || this.checkForLetter(numberTwo) ) {
        console.log('invalid inputs');
        this.message = 'invalid inputs';
        this.isValid = false;
        return false;
    }

    return true;
}
  clear(): void {
   this.inputEleOne.value = '';
   this.inputEleTwo.value = '';
   this.output = '';
   this.message = '';
}
  checkForLetter(input: string): boolean {
      return !/^\d+$/.test(input);
    }

}
