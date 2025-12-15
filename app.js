// AI suggestion to make app file for each page to run, interconnects functions of other js files

import { loadHTML } from './page_border.js';

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    loadHTML('header', 'header.html'); // Load header into #header
    loadHTML('footer', 'footer.html'); // Load footer into #footer
}

// ready function