// Form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    //console.log(123);
    // Get values
    let name = getInputVal('name');
    let lastName = getInputVal('lastName');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');
    //console.log(name);
}

//create a function get form value
function getInputVal(id) {
    return document.getElementById(id).value;
}