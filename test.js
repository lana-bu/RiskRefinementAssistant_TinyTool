// will be deleted, just storing test code for now

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    loadHTML('header', 'header.html'); // Load header into #header
    loadHTML('footer', 'footer.html'); // Load footer into #footer

    const form = document.getElementById('input-form');

    form.addEventListener('submit', submitButtonClicked);


    // const currRisk = new Risk;
    // const headerView = new View(document.getElementById('header'));
    // const footerView = new View(document.getElementById('footer'));
    // const inputView = new View(document.getElementById('input-form'));
    // //const outputView = new ProductView(document.getElementById('productContainer'));
    // const controller = new Controller(currRisk, inputView);

    // var submitButton = document.getElementsByClassName('submit-btn')[0];
    // submitButton.addEventListener('click', controller.submitButtonClicked);
}

function submitButtonClicked(event){
    preventDefault();

    const condition = form.elements.
}