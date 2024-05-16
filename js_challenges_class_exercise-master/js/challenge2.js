
function changeAddress() {
    var checkbox = document.getElementById('sameAddress');
    var billingAddress = document.getElementById('bill');
    var homeAddress = document.getElementById('home');
    
    if (checkbox.checked) {
        homeAddress.value = billingAddress.value; 
        homeAddress.disabled = true; 
    } else {
        homeAddress.disabled = false; 
        homeAddress.value = ''; 
    }
}
