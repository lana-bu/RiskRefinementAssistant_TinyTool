// AI sugesstion to put model in its own file
export class RiskModel {
    constructor() { // AI suggestion to predefine attributes with empty values
        this.condition = '';
        this.subconditions = [];
        this.consequence = '';
        this.sentence = ''; // may not be necessary
    }

    setCondition(value) { // AI suggestion for how to assign value to condition
        this.condition = value.trim(); // trim takes away extra whitespace on either side of string
    }

    setSubconditions(values) {
        if (this.subconditions.length > 0) {
            this.subconditions = []
        }

        for (var i = 0; i < values.length; i++) {
            this.subconditions.push(values[i].trim());
        }
    }

    setConsequence(value) {
        this.consequence = value.trim();
    }

    validateInput() {
        var errorMsg = ['','','']

        if (this.condition.trim() == '' && this.subconditions.length < 1) {
            errorMsg[0] = 'You must enter a condition';
        } else if (this.subconditions.length > 0) {
            for (var i = 0; i < this.subconditions.length; i++) {
                if (this.subconditions[i].trim() == '') {
                    errorMsg[1] = 'You must provide all subconditions'
                    break;
                }
            }
        }

        if (this.consequence.trim() == '') {
            errorMsg[2] = 'You must enter a consequence'
        }

        return errorMsg;
    }

    refineRisk() {
        // build risk sentence
    }

    toJSON() {
        // turn inputs into JSON?
    }

    static fromStorage() {
        // get saved risk inputs from session storage
    }

    save() {
        // save session storage?
    }

    clear() {
        // clear session storage
    }
}