// AI suggestion to put functions for header/footer of each page into separate file

export async function loadHTML(elementId, filePath) {
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

            if (elementId == 'header') { // AI uggestion for how to let header elements have events
                initHeaderEvents();
            }
        } else {
            throw new Error(`Element with ID "${elementId}" not found`);
        }
    } catch (error) {
        console.error('Error loading content:', error);
        // Optional: Display a fallback message in the UI
    }
}

function initHeaderEvents() {
    const menuDropdown = document.getElementById('nav-dropdown');
    if (menuDropdown) {
        menuDropdown.addEventListener('click', toggleDropdown);
        console.log('added listener');
    }
}

function toggleDropdown(event) {
    console.log('clicked');
    document.getElementById('myDropdown').classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropdown-btn')) {
    var dropdown = document.getElementById("nav-dropdown");
        if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        }
    }
}

// event listener for dropdown navigation