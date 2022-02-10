function showMenu() {
    var x = document.getElementById("myNavBar");
    if(x.className == "hw") {
        x.className += "responsive";
    } else {
        x.className = "hw";
    }
}