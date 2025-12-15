// AI suggestion to store controller in its own file

import { RiskModel } from './model.js';
import { RiskInputView } from './views.js';
import { RiskOutputView } from './views.js';

export class RiskInputController {
    constructor() { // AI suggestion to assign new RiskModel and RiskInputView to controller's model and view attributes
        this.model = new RiskModel();
        this.view = new RiskInputView();
    }

    init() { // AI suggestion to have init function and define what it does
        if (!this.view.form) {
            return; // this controller not needed for any pages except index which has the input form
        }

        this.view.numOfSubcondDropdown.addEventListener('change', () => this.handleDropdown());
        this.view.submitButton.addEventListener('click', () => this.handleSubmit());
    }

    handleDropdown() {
        this.view.renderSubconditions(parseInt(this.view.numOfSubcondDropdown.value));
    }

    handleSubmit() {
        this.model.setCondition(this.view.getConditionValue());
        this.model.setSubconditions(this.view.getSubconditionValues());
        this.model.setConsequence(this.view.getConsequenceValue());

        console.log('Condition: ' + this.view.getConditionValue());
        console.log('Subconditions: ' + this.view.getSubconditionValues());
        console.log('Consequence: ' + this.view.getConsequenceValue());

        console.log('Errors: ' + this.model.validateInput());
    }
}

// AI suggestion to have separate controller class for input and output pages
export class RiskOutputController {
    constructor() { // AI suggestion to assign session stored RiskModel and new RiskInputView to controller's model and view attributes
        this.model = RiskModel.fromStorage();
        this.view = new RiskOutputView();
    }

    init() {
        if (!this.view.result) { // need to change result
            return;
        }
    }
}