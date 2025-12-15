// will be deleted, just storing code to modify and transfer over to other js files

class Risk {
  constructor(condition = "", subconditions = [], consequence = "") {
    this.condition = condition;
    this.subconditions = subconditions;
    this.consequence = consequence;
    this.sentence = "";
  }

  validateInput(currCond, currSubcond = [], currCons) {
    if (newPrice > 0) {
      this.price = newPrice;
    }
  }

  refineRisk() {
    return this.name;
  }

  getCondition() {
    return this.condition;
  }

  getSubconditions() {
    return this.subconditions;
  }

  getConsequence() {
    return this.consequence;
  }

  getRefinedRisk() {

  }
}

class View {
  constructor(container) {
    this.container = container;
  }

  getInputValue(className) {
    var inputFields = document.getElementsByClassName(className);
    
    if (inputFields.length > 1) {
      for (i = 0; i < inputFields.length; i++) {
        var inputValue = [];
        inputValue.append(inputFields[i].value);
      }
    } else if (inputFields.length < 1) {
      var inputValue = [];
    } else {
      var inputValue = inputFields[0].value;
    }
    
    return inputValue;
  }
  
  displayRefinedRisk(currRisk) {
    this.container.innerHTML = `${currRisk.getRefinedRisk()}`;
  }

  displayPreviousInput(currRisk) {
    this.container
  }

  displaySubconditionInputs() {

  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  updatePrice(newPrice) {
    this.model.setPrice(newPrice);
    this.view.render(this.model);
  }

  gatherInput() {
    var condValue = this.view.getInputValue('condition-input');
    var subcondValues = this.view.getInputValue('subcondition-input');
    var consValue = this.view.getInputValue('consequence-input');
    
    alert("Input values: " + condValue + subcondValues + consValue);
    //this.model.validateInput(condValue, subcondValues, consValue);
  }

  submitButtonClicked(event) {
    //this.gatherInput();
    var condValue = this.view.getInputValue('condition-input');
    var subcondValues = this.view.getInputValue('subcondition-input');
    var consValue = this.view.getInputValue('consequence-input');
    
    alert("Input values: " + condValue + subcondValues + consValue);
    //this.model.validateInput(condValue, subcondValues, consValue);
  }

  newButtonClicked(event) {

  }

  editButtonClicked(event) {

  }

  copyButtonClicked(event) {

  }
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  loadHTML('header', 'header.html'); // Load header into #header
  loadHTML('footer', 'footer.html'); // Load footer into #footer

  const currRisk = new Risk;
  const inputView = new View(document.getElementsByClassName('input-form')[0]);
  //const outputView = new ProductView(document.getElementById('productContainer'));
  const controller = new Controller(currRisk, inputView);

  var submitButton = document.getElementsByClassName('submit-btn')[0];
  submitButton.addEventListener('click', controller.submitButtonClicked);
}

// Function to load HTML content into a target element
async function loadHTML(elementId, filePath) {
  try {
    // Fetch the external HTML file
    const response = await fetch(filePath);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
    }
    
    // Extract HTML text from the response
    const html = await response.text();
    
    // Insert the HTML into the target element
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    } else {
      throw new Error(`Element with ID "${elementId}" not found`);
    }
  } catch (error) {
    console.error('Error loading content:', error);
    // Optional: Display a fallback message in the UI
  }
}

function toggleSubconditions() {
  var subconditionNumber = document.getElementById('selectNumber');
  var subconditions = document.getElementsByClassName('subconditions')[0]
  var subconditionNames = subconditions.getElementsByClassName('subcondition-label')
  if (parseInt(subconditionNumber.value) > subconditionNames.length) {
    for (i = subconditionNames.length; i < parseInt(subconditionNumber.value); i++) {
      var subcondition = document.createElement('div');
      subcondition.classList.add('input-box');
      subcondition.classList.add('subcondition');
      var subconditionContents = `
        <label class="label subcondition-label" for="subcondition">Subcondition ${parseInt(i) + 1}: </label>
        <input class="input subcondition-input" type="text" name="subcondition" value="">`;
      subcondition.innerHTML = subconditionContents;
      subconditions.append(subcondition);
    }
  } else if (parseInt(subconditionNumber.value) < subconditionNames.length) {
    for (i = subconditionNames.length; i > parseInt(subconditionNumber.value); i--) {
      var subconditions = document.getElementsByClassName('subconditions')[0];
      subconditions.removeChild(subconditions.lastElementChild);
    }
  }
}

// // Initially render view with product details
// controller.updatePrice(product.getPrice());

// // Updating price and re-rendering
// controller.updatePrice(1099.99);