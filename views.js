// AI suggestion to store view in its own file

export class RiskInputView {
    constructor() {
        // AI suggestion for what attributes the RiskInputView should have
        this.form = document.getElementById('input-form');
        this.conditionInput = document.getElementById('condition-input');
        this.subconditionsContainer = document.getElementById('subconditions-container');
        this.numOfSubcondDropdown = document.getElementById('select-number');
        this.consequenceInput = document.getElementById('consequence-input');
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
}

// AI suggestion to have separate view class for input and output pages
export class RiskOutputView {

}