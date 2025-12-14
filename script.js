if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  loadHTML('header', 'header.html'); // Load header into #header
  loadHTML('footer', 'footer.html'); // Load footer into #footer
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
        <input class="input subcondition-input" type="text" name="subcondition">`;
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

function getOption() {
    value = document.getElementsByClassName('drop-btn').value;
    console.log(value);
}

function subconditionNumberClicked(event) {
  var numberOption = event.target;
  console.log(numberOption.value);
  var subconditions = document.getElementsByClassName('subconditions')[0]
  for (i = 0; i < numberOption.value; i++) {
    var subcondition = document.createElement('div');
    subcondition.classList.add('input-box subcondition');
    var subconditionContents = `
      <label class="label subcondition-label" for="subcondition">Subcondition ${i + 1}: </label>
      <input class="input subcondition-input" type="text" name="subcondition">`;
    subcondition.innerHTML = subconditionContents;
    subconditions.append(subcondition)
  }
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