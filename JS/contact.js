// const nameValue = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const message = document.querySelector("#message");
// const successful = document.querySelector("#successful");
// const errorNote = document.querySelector("#.error");


//     if(document.input ==null){
//         errorNote[0].innerText = "Fill in your name";
//     }
//     else{

function submission(){
    document.getElementById("submitted").innerHTML = "Thank you! Your request has been received. You will get a response soon.";

    document.getElementById("form").reset();
}
//     }
// }


// function submission(){
//     clearMessage();

//     if (nameValue.value.length<1){
//         errorNote[0].innerText = "Fill in your name";
//         nameValue.classList.add("error-border");
//     }

//     if (!validEmail(email.value)){
//         errorNote[1].innerText = "Enter a valid email address"
//     }
// }