

document.getElementById("btn-login").addEventListener("click", function (event) {
    // event.preventDefault();//jokhon sob kicu from ar modde thakbe tokhon aita use korbo

    //mobile number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    //you do not use this system
    if (phoneNumber === "62" && pinNumber === "1234") {
        // console.log("Correct phone number and pin number")

        //alada akta file a niye jabo jodi sotto ta sotti hoy
        window.location.href = "/home.html";
    }
    else {
        alert("Give correct phone and pin number");
    }
})