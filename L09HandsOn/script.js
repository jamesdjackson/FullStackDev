/**
 * Created by jamesjackson on 3/28/19.
 */
let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("birthday").innerHTML = myObj.birthday;
    }
};


newRequest.open("GET", "einstein.json", true);
newRequest.send();

function loadBio() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let my_Obj = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = my_Obj.bio;
        }
    };
    xhttp.open("GET", "einstein.json", true);
    xhttp.send();
}