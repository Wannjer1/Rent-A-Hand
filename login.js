var objpeople =[
    {
        username: "kelvinkipla@gmail.com",
        password: "kevo"
    }
];
function getinfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("your username is" +username+ "and your password" +password)
    for(i=o; i<objpeople.length; i++){
        if(username==objpeople[i].username && password==objpeople[i].password)
    {
        console.log(username + "is logged in")
    }}
}
function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("email must be filled out");
      return false;
    }
  }
  