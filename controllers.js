// AI suggestion to store controller in its own file

import { RiskModel } from './model.js';
import { RiskInputView } from './views.js';
import { RiskOutputView } from './views.js';

export class RiskInputController {
    constructor() { // AI suggestion to assign new RiskModel and RiskInputView to controller's model and view attributes
        this.model = new RiskModel();
        this.view = new RiskInputView();
    }

    init() {
        if (!this.view.form) {
            return; // this controller not needed for any pages except index which has the input form
        }

        this.view.numOfSubcondDropdown.addEventListener('change', () => {
            this.view.renderSubconditions(parseInt(this.view.numOfSubcondDropdown.value));
        })
    }
}

// AI suggestion to have separate controller class for input and output pages
export class RiskOutputController {
    constructor() { // AI suggestion to assign session stored RiskModel and new RiskInputView to controller's model and view attributes
        this.model = RiskModel.fromStorage();
        this.view = new RiskOutputView();
    }

    init() {

    }
}