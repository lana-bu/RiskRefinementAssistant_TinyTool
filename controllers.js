// AI suggestion to store controller in its own file

import { RiskModel } from './model.js';
import { RiskInputView } from './views.js';
import { RiskOutputView } from './views.js';

export class RiskInputController {
    constructor() { // AI suggestion to assign new RiskModel and RiskInputView to controller's model and view attributes
        this.model = RiskModel.fromStorage();
        this.view = new RiskInputView();
    }

    init() { // AI suggestion to have init function and define what it does
        if (this.model.getConsequence() != '') { // if edit button was clicked (so there is pre-saved data)
            this.view.fillForm(this.model);
        }

        this.view.numOfSubcondDropdown.addEventListener('change', () => this.handleDropdown());
        this.view.submitButton.addEventListener('click', () => this.handleSubmit());
    }

    handleDropdown() {
        this.view.renderSubconditions(parseInt(this.view.numOfSubcondDropdown.value));
    }

    handleSubmit() { // AI suggested function, but modified by us in how it validates inputs, clears errors, and shows new errors
        this.model.setCondition(this.view.getConditionValue());
        this.model.setSubconditions(this.view.getSubconditionValues());
        this.model.setConsequence(this.view.getConsequenceValue());

        this.view.clearErrors();

        var inputErrors = this.model.validateInput();

        for (var i = 0; i < inputErrors.length; i++) {
            if (inputErrors[i] != '') {
                this.view.showErrors(inputErrors);
                return;
            }
        }

        this.model.refineRisk();

        this.model.save();

        window.location.href = 'output.html';
    }
}

// AI suggestion to have separate controller class for input and output pages
export class RiskOutputController {
    constructor() { // AI suggestion to assign session stored RiskModel and new RiskInputView to controller's model and view attributes
        this.model = RiskModel.fromStorage();
        this.view = new RiskOutputView();
    }

    init() { // AI suggestion for what actions to include in initialization function
        this.view.renderOutput(this.model.getRefinedRisk());
        
        this.view.copyButton.addEventListener('click', () => this.handleCopy());
        this.view.editButton.addEventListener('click', () => this.handleEdit());
        this.view.newButton.addEventListener('click', () => this.handleNew());
    }

    handleCopy() {
        this.view.copySentenceToClipboard();
        this.view.displayTemporaryCopiedMessage();
    }

    handleEdit() {
        window.location.href = 'index.html';
    }

    handleNew() {
        this.model.clear();
        window.location.href = 'index.html';
    }
}