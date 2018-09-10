const PubSub = require('../helpers/pub_sub');

const NumberInputView = function(){

}

NumberInputView.prototype.bindEvents = function(){
    const form = document.querySelector('#prime-checker-form')
    form.addEventListener('submit',(event) => {
        event.preventDefault();
        const typedNumber = event.target.number.value;

        PubSub.publish('NumberInputView:number-submitted', typedNumber);
    })
}

module.exports = NumberInputView;
