// AI suggestion to make app file for each page to run, interconnects functions of other js files

import { RiskInputController, RiskOutputController } from './controllers.js';
import { loadHTML } from './page_border.js';

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    loadHTML('header', 'header.html'); // Load header into #header
    loadHTML('footer', 'footer.html'); // Load footer into #footer

    // AI suggestion for when to build and initialize controllers (only when on matching page)
    if (document.getElementById('input-form')) {
        const controller = new RiskInputController();
        controller.init();
    }

    if (document.getElementById('refined-risk-container')) {
        const controller = new RiskOutputController();
        controller.init();
    }
}