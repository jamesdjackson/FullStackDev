/**
 * Created by jamesjackson on 3/17/19.
 */
function phoneNumberFormat() {
    let phoneNumber = document.getElementById('phNumber').value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
    if (phoneNumber.match(phoneRegex)) {
        alert('Valid number entered');
        console.log(true);
    }
    else {
        alert('Phone number entered is invalid');
        console.log(false);
    }
}