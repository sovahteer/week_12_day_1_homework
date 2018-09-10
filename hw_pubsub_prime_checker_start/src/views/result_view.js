const PubSub = require ('../helpers/pub_sub');

const ResultView = function(){

}

    ResultView.prototype.displayResult = function(numberIsPrime){
        const resultElement = document.querySelector('#result');
        numberIsPrime = numberIsPrime? 'is': 'is not';
        resultElement.textContent = `That number ${numberIsPrime} a prime number`
    }

    ResultView.prototype.bindEvents = function(){
        PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
            const banana = event.detail;
            this.displayResult(banana);
        });
    }

module.exports = ResultView;