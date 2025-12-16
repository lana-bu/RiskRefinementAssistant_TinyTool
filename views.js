// AI suggestion to store view in its own file

export class RiskInputView {
    constructor() {
        // AI suggestion for what attributes the RiskInputView should have
        this.form = document.getElementById('input-form');
        this.conditionInput = document.getElementById('condition-input');
        this.subconditionsContainer = document.getElementById('subconditions-container');
        this.numOfSubcondDropdown = document.getElementById('select-number');
        this.consequenceInput = document.getElementById('consequence-input');
        this.submitButton = document.getElementById('submit-btn');
    }

    renderSubconditions(numOfSubcond) {
        var subconditionNames = this.subconditionsContainer.getElementsByClassName('subcondition-label')
        
        if (numOfSubcond > subconditionNames.length) {
            for (var i = subconditionNames.length; i < numOfSubcond; i++) {
            var subcondition = document.createElement('div');

            subcondition.classList.add('input-box');
            subcondition.classList.add('subcondition');

            var subconditionContents = `
                <label class="label subcondition-label" for="subcondition">Subcondition ${parseInt(i) + 1}: </label>
                <input class="input subcondition-input" type="text" name="subcondition" value="">`;

            subcondition.innerHTML = subconditionContents;

            this.subconditionsContainer.append(subcondition);
            }
        } else if (numOfSubcond < subconditionNames.length) {
            for (var i = subconditionNames.length; i > numOfSubcond; i--) {
                this.subconditionsContainer.removeChild(this.subconditionsContainer.lastElementChild);
            }
        }
    }

    getConditionValue() { // AI suggested function to get user input from condition input box
        return this.conditionInput.value;
    }

    getSubconditionValues() {
        var subconditionInputs = this.subconditionsContainer.getElementsByClassName('subcondition-input');
        var subconditionValues = [];

        for (var i = 0; i < subconditionInputs.length; i++) {
            subconditionValues.push(subconditionInputs[i].value);
        }

        return subconditionValues;
    }

    getConsequenceValue() { // AI suggested function to get user input from consequence input box
        return this.consequenceInput.value;
    }

    showErrors(errors) {
        // display error messages on webpage
        if (errors[0] != '') {
            var conditionError = document.createElement('div');

            conditionError.classList.add('error');
            conditionError.classList.add('condition-error');

            var conditionErrorContents = `
            <span class="error-msg">${errors[0]}</span>`;

            conditionError.innerHTML = conditionErrorContents;

            this.conditionInput.parentElement.append(conditionError);
        } else if (errors[1] != '') {
            var subconditionsError = document.createElement('div');

            subconditionsError.classList.add('error');
            subconditionsError.classList.add('subconditions-error');

            var subconditionsErrorContents = `
            <span class="error-msg">${errors[1]}</span>`;

            subconditionsError.innerHTML = subconditionsErrorContents;

            this.subconditionsContainer.append(subconditionsError);
        }

        if (errors[2] != '') {
            var consequenceError = document.createElement('div');

            consequenceError.classList.add('error');
            consequenceError.classList.add('subconditions-error');

            var consequenceErrorContents = `
            <span class="error-msg">${errors[2]}</span>`;

            consequenceError.innerHTML = consequenceErrorContents;

            this.consequenceInput.parentElement.append(consequenceError);
        }
    }

    clearErrors(){
        const errors = document.querySelectorAll('.error');

        errors.forEach(error => {
            error.remove();
        });
    }

    fillForm(model) { // AI suggestion for how to fill form with previous inputs
        this.conditionInput.value = model.getCondition();

        this.numOfSubcondDropdown.value = model.getSubconditions().length;
        this.renderSubconditions(model.getSubconditions().length);

        var subconditionInputs = this.subconditionsContainer.getElementsByClassName('subcondition-input');
        for (var i = 0; i < subconditionInputs.length; i++) {
            subconditionInputs[i].value = model.getSubconditions()[i];
        }

        this.consequenceInput.value = model.getConsequence();
    }
}

// AI suggestion to have separate view class for input and output pages
export class RiskOutputView {
    constructor() { // AI suggestion for what attributes the RiskOutputView should have
        this.sentenceOutput = document.getElementById('refined-risk');
        this.copyButton = document.getElementById('copy-btn');
        this.editButton = document.getElementById('edit-btn');
        this.newButton = document.getElementById('new-btn');
        this.copiedMessage = document.getElementById('copied-msg');
    }

    renderOutput(sentence) { // AI suggestion for how to put sentence text into proper HTML element
        this.sentenceOutput.textContent = sentence;
    }
    
    copySentenceToClipboard() { // AI suggestion for how to copy sentence output text to clipboard
        navigator.clipboard.writeText(this.sentenceOutput.textContent);
    }

    displayTemporaryCopiedMessage() {
        // this.copiedMessage.style.visibility = 'visible';
        // setTimeout(() => {
        //     this.copiedMessage.style.visibility = 'hidden';
        //  }, 1000);
        this.show(this.copiedMessage);
        setTimeout(() => this.hide(this.copiedMessage), 1000);
    }

    show(element) {
        element.style.opacity = 1;
    }

    hide(element) {
        const fadeInterval = setInterval(() => this.fade(element, fadeInterval), 50);
    }

    fade(element, intervalID) {
        var opacity = Number(window.getComputedStyle(element).getPropertyValue('opacity'));

        if (opacity > 0) {
            opacity = opacity - 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }
}