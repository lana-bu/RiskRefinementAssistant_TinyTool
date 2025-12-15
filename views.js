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
}

// AI suggestion to have separate view class for input and output pages
export class RiskOutputView {

}