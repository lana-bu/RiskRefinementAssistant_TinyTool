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
            this.subconditions.push(values[i]);
        }
    }

    setConsequence(value) {
        this.consequence = value;
    }

    validateInput() {
        // validate input method
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