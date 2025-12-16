// AI sugesstion to put model in its own file
export class RiskModel {
    constructor(data = {}) { // AI suggestion to predefine attributes with empty values
        this.condition = data.condition || '';
        this.subconditions = data.subconditions || [];
        this.consequence = data.consequence || '';
        this.refinedRisk = data.refinedRisk || ''; // may not be necessary
    }

    setCondition(value) { // AI suggestion for how to assign value to condition
        this.condition = value.trim(); // trim takes away extra whitespace on either side of string
    }

    getCondition() {
        return this.condition;
    }

    setSubconditions(values) {
        if (this.subconditions.length > 0) {
            this.subconditions = []
        }

        for (var i = 0; i < values.length; i++) {
            this.subconditions.push(values[i].trim());
        }
    }

    getSubconditions() {
        return this.subconditions;
    }

    setConsequence(value) {
        this.consequence = value.trim();
    }

    getConsequence() {
        return this.consequence;
    }

    validateInput() {
        var errorMsg = ['','','']

        if (this.condition.trim() == '' && this.subconditions.length < 1) {
            errorMsg[0] = 'You must enter a condition.';
        } else if (this.subconditions.length > 0) {
            for (var i = 0; i < this.subconditions.length; i++) {
                if (this.subconditions[i].trim() == '') {
                    errorMsg[1] = 'You must provide all subconditions.'
                    break;
                }
            }
        }

        if (this.consequence.trim() == '') {
            errorMsg[2] = 'You must enter a consequence.'
        }

        return errorMsg;
    }

refineRisk() 
{
    let riskSentence = "Given that ";
    const subcondCount = this.subconditions.length;

    //case 1, no subconditions
    if (subcondCount < 1)
    {
        riskSentence += this.condition;
        riskSentence += ", then there is concern that (possibly) ";
    }

    //case 2, one or more subconditions
    else 
    {
        if (subcondCount <= 2)
        {
            //exactly 1 or 2 subcons
            riskSentence += this.subconditions[0];

            if (subcondCount === 2) 
            {
                riskSentence += " and " + this.subconditions[1];
            }

            riskSentence += ", then there is concern that (possibly) ";
        }
        else
        {
            //three or more subcons
            riskSentence += this.subconditions[0];

            for (let i = 1; i < subcondCount - 1; i++) 
            {
                riskSentence += ", " + this.subconditions[i];
            }

            riskSentence += ", and " + this.subconditions[subcondCount - 1];
            riskSentence += ", then there is concern that (possibly) ";
        }
    }

    //append the consequence and store the result
    riskSentence += this.consequence;
    riskSentence += "."
    this.refinedRisk = riskSentence;
}


    getRefinedRisk() {
        return this.refinedRisk;
    }

    toJSON() { // AI suggestion to condense data for transforming it into a JSON formatted string later
        return {
            condition: this.condition,
            subconditions: this.subconditions,
            consequence: this.consequence,
            refinedRisk: this.refinedRisk
        };
    }

    static fromStorage() { // AI suggestion for how to put risk data from old instance into new instance
        const rawData = sessionStorage.getItem('riskData');
        if (rawData != null) {
            return new RiskModel(JSON.parse(rawData)); // convert data from JSON formatted string to JavaScript object that can be used to construct a new RiskModel instance
        } else {
            return new RiskModel();
        }
    }

    save() { // AI suggestion for how to save risk data for current instance as a JSON formatted string in session storage
        sessionStorage.setItem('riskData', JSON.stringify(this.toJSON()));
    }

    clear() { // AI suggestion for how to delete stored risk data from session storage
        sessionStorage.removeItem('riskData');
    }
}