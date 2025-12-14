if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  loadHTML('header', 'header.html'); // Load header into #header
  loadHTML('footer', 'footer.html'); // Load footer into #footer
}

function toggleDiv() {
  value = document.getElementById('select').value;
  div1 = document.getElementById('one');
  div2 = document.getElementById('two');
  div3 = document.getElementById('three');
  div4 = document.getElementById('four');
  div5 = document.getElementById('five');

  if (parseInt(value) < 2) {
    div1.style.visibility = 'hidden';
    div2.style.visibility = 'hidden';
    div3.style.visibility = 'hidden';
    div4.style.visibility = 'hidden';
    div5.style.visibility = 'hidden';
  } else if (parseInt(value) == 2) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'hidden';
    div4.style.visibility = 'hidden';
    div5.style.visibility = 'hidden';
  } else if (parseInt(value) == 3) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'visible';
    div4.style.visibility = 'hidden';
    div5.style.visibility = 'hidden';
  } else if (parseInt(value) == 4) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'visible';
    div4.style.visibility = 'visible';
    div5.style.visibility = 'hidden';
  } else if (parseInt(value) == 5) {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'visible';
    div3.style.visibility = 'visible';
    div4.style.visibility = 'visible';
    div5.style.visibility = 'visible';
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