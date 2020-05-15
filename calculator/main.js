const calculator = {
    screenArr: [],

    screen: document.querySelector('.display'),

    buttonOne: document.querySelector('.panel__dight:nth-child(7)'),
    buttonTwo: document.querySelector('.panel__dight:nth-child(8)'),
    buttonThree: document.querySelector('.panel__dight:nth-child(9)'),
    buttonFour: document.querySelector('.panel__dight:nth-child(4)'),
    buttonFive: document.querySelector('.panel__dight:nth-child(5)'),
    buttonSix: document.querySelector('.panel__dight:nth-child(6)'),
    buttonSeven: document.querySelector('.panel__dight:nth-child(1)'),
    buttonEight: document.querySelector('.panel__dight:nth-child(2)'),
    buttonNine: document.querySelector('.panel__dight:nth-child(3)'),
    buttonZero: document.querySelector('.panel__dight:nth-child(11)'),
    buttonPosNeg: document.querySelector('.panel__dight:nth-child(10)'),
    buttonDot: document.querySelector('.panel__dight:nth-child(12)'),

    update(data) {
        if (!isNaN(data)) {
            this.screenArr.push(data);
        } else if (data === 'minus') {
            if (this.screenArr[0] === '-') {
                this.screenArr.shift()
            } else {
                this.screenArr.unshift('-')
            }
        } else if (data === '.') {
            if (this.screenArr.length === 0 && data === '.') {
                this.screenArr.push('0.')
            } else if (this.screenArr.filter(dot => dot === '.').length == 1) {
                this.screenArr.push('');
            } else {
                this.screenArr.push(data)
            }
        }
        this.screen.textContent = this.screenArr.join('')
    },

    buttonDelete: document.querySelector('.panel__actions:nth-child(1)'),
    buttonMultiplication: document.querySelector('.panel__actions:nth-child(2)'),
    buttonSubtraction: document.querySelector('.panel__actions:nth-child(3)'),
    buttonSummation: document.querySelector('.panel__actions:nth-child(4)'),
    buttonResult: document.querySelector('.panel__actions:nth-child(5)'),
    buttonClear: document.querySelector('.panel__actions:nth-child(6)'),

};

let actions = {
    convertToDight() {
        let data = calculator.screenArr.map(data => data);
        let dight = -(data.join(''));
        if (data[0] === '-') {
            if (this.firstDight.length === 1) {
                return this.firstDight.push(dight * -1)
            } else {
                return dight * -1
            }
        } else {
            if (this.firstDight.length === 1) {
                return this.firstDight.push(dight * -1)
            } else {
                return dight * -1
            }
        }
    },

    firstDight: [],

    actionAndMemorizedFirstDight(action) {
        if (this.firstDight.length === 2) {
            alert('Error! Enter second dight,or press "=".') // Protecting version just for beta 
        } else {
            this.firstDight.push(action);
            this.convertToDight();
            calculator.screenArr = [];
            calculator.screen.textContent = ''
        }
    },

    results() {
        let action = this.firstDight[0];
        let diplayResult
        switch (action) {
            case '/':
                diplayResult = this.firstDight[1] / this.convertToDight();
                calculator.screen.textContent = diplayResult;
                calculator.screenArr = []
                calculator.screenArr.push(diplayResult)
                this.firstDight = []
                break;
            case '*':
                diplayResult = this.firstDight[1] * this.convertToDight();
                calculator.screen.textContent = diplayResult;
                calculator.screenArr = []
                calculator.screenArr.push(diplayResult)
                this.firstDight = []
                break;
            case '+':
                diplayResult = this.firstDight[1] + this.convertToDight();
                calculator.screen.textContent = diplayResult;
                calculator.screenArr = []
                calculator.screenArr.push(diplayResult)
                this.firstDight = []
                break;
            case '-':
                diplayResult = this.firstDight[1] - this.convertToDight();
                calculator.screen.textContent = diplayResult;
                calculator.screenArr = []
                calculator.screenArr.push(diplayResult)
                this.firstDight = []
                break;
        }
    }
};

calculator.buttonOne.onclick = () => {
    calculator.update(1)
};
calculator.buttonTwo.onclick = () => {
    calculator.update(2)
};
calculator.buttonThree.onclick = () => {
    calculator.update(3)
};
calculator.buttonFour.onclick = () => {
    calculator.update(4)
};
calculator.buttonFive.onclick = () => {
    calculator.update(5)
};
calculator.buttonSix.onclick = () => {
    calculator.update(6)
};
calculator.buttonSeven.onclick = () => {
    calculator.update(7)
};
calculator.buttonEight.onclick = () => {
    calculator.update(8)
};
calculator.buttonNine.onclick = () => {
    calculator.update(9)
};
calculator.buttonZero.onclick = () => {
    calculator.update(0)
};
calculator.buttonPosNeg.onclick = () => {
    calculator.update('minus')
};
calculator.buttonDot.onclick = () => {
    if(calculator.screenArr[0] === '0.' || calculator.screenArr % 1){
    } else {
        calculator.update('.') 
    }  
};
// ----*----
calculator.buttonDelete.onclick = () => {
    actions.actionAndMemorizedFirstDight('/')
};
calculator.buttonMultiplication.onclick = () => {
    actions.actionAndMemorizedFirstDight('*')
};
calculator.buttonSubtraction.onclick = () => {
    actions.actionAndMemorizedFirstDight('-')
};
calculator.buttonSummation.onclick = () => {
    actions.actionAndMemorizedFirstDight('+')
};
calculator.buttonResult.onclick = () => {
    calculator.screen.textContent = ''
    actions.results()    
};
calculator.buttonClear.onclick = () => {
    calculator.screen.textContent = '';
    calculator.screenArr = [];
    actions.firstDight = []
};

// --- User Inderface
//1
calculator.buttonOne.onmousedown = () => {
    calculator.buttonOne.classList.remove('shadow')
};
calculator.buttonOne.onmouseup = () => {
    calculator.buttonOne.classList.add('shadow')
};
//2
calculator.buttonTwo.onmousedown = () => {
    calculator.buttonTwo.classList.remove('shadow')
};
calculator.buttonTwo.onmouseup = () => {
    calculator.buttonTwo.classList.add('shadow')
};
//3
calculator.buttonThree.onmousedown = () => {
    calculator.buttonThree.classList.remove('shadow')
};
calculator.buttonThree.onmouseup = () => {
    calculator.buttonThree.classList.add('shadow')
};
//4
calculator.buttonFour.onmousedown = () => {
    calculator.buttonFour.classList.remove('shadow')
};
calculator.buttonFour.onmouseup = () => {
    calculator.buttonFour.classList.add('shadow')
};
//5
calculator.buttonFive.onmousedown = () => {
    calculator.buttonFive.classList.remove('shadow')
};
calculator.buttonFive.onmouseup = () => {
    calculator.buttonFive.classList.add('shadow')
};
//6
calculator.buttonSix.onmousedown = () => {
    calculator.buttonSix.classList.remove('shadow')
};
calculator.buttonSix.onmouseup = () => {
    calculator.buttonSix.classList.add('shadow')
};
//7
calculator.buttonSeven.onmousedown = () => {
    calculator.buttonSeven.classList.remove('shadow')
};
calculator.buttonSeven.onmouseup = () => {
    calculator.buttonSeven.classList.add('shadow')
};
//8
calculator.buttonEight.onmousedown = () => {
    calculator.buttonEight.classList.remove('shadow')
};
calculator.buttonEight.onmouseup = () => {
    calculator.buttonEight.classList.add('shadow')
};
//9
calculator.buttonNine.onmousedown = () => {
    calculator.buttonNine.classList.remove('shadow')
};
calculator.buttonNine.onmouseup = () => {
    calculator.buttonNine.classList.add('shadow')
};
//0
calculator.buttonZero.onmousedown = () => {
    calculator.buttonZero.classList.remove('shadow')
};
calculator.buttonZero.onmouseup = () => {
    calculator.buttonZero.classList.add('shadow')
};
//+/- 
calculator.buttonPosNeg.onmousedown = () => {
    calculator.buttonPosNeg.classList.remove('shadow')
};
calculator.buttonPosNeg.onmouseup = () => {
    calculator.buttonPosNeg.classList.add('shadow')
};
// .
calculator.buttonDot.onmousedown = () => {
    calculator.buttonDot.classList.remove('shadow')
};
calculator.buttonDot.onmouseup = () => {
    calculator.buttonDot.classList.add('shadow')
};
// /
calculator.buttonDelete.onmousedown = () => {
    calculator.buttonDelete.classList.remove('shadow')
};
calculator.buttonDelete.onmouseup = () => {
    calculator.buttonDelete.classList.add('shadow')
};
// *
calculator.buttonMultiplication.onmousedown = () => {
    calculator.buttonMultiplication.classList.remove('shadow')
};
calculator.buttonMultiplication.onmouseup = () => {
    calculator.buttonMultiplication.classList.add('shadow')
};
// -
calculator.buttonSubtraction.onmousedown = () => {
    calculator.buttonSubtraction.classList.remove('shadow')
};
calculator.buttonSubtraction.onmouseup = () => {
    calculator.buttonSubtraction.classList.add('shadow')
};
// +
calculator.buttonSummation.onmousedown = () => {
    calculator.buttonSummation.classList.remove('shadow')
};
calculator.buttonSummation.onmouseup = () => {
    calculator.buttonSummation.classList.add('shadow')
};
// = 
calculator.buttonResult.onmousedown = () => {
    calculator.buttonResult.classList.remove('shadow')
};
calculator.buttonResult.onmouseup = () => {
    calculator.buttonResult.classList.add('shadow')
};
// c 
calculator.buttonClear.onmousedown = () => {
    calculator.buttonClear.classList.remove('shadow')
};
calculator.buttonClear.onmouseup = () => {
    calculator.buttonClear.classList.add('shadow')
};