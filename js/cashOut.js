
//step 1
document.getElementById("btn-cash-out").addEventListener("click", function () {
    // step 2
    const inputCashOutMoney = document.getElementById("input-cash-out-money").value;
    const cashOutMoney = parseFloat(inputCashOutMoney);
    const inputCashOutPin = document.getElementById("input-cash-out-pin").value;
    
    // step 3
    //wrong way this system verify pin
    if (inputCashOutPin === "1122") {
        // step 4
        const accountBalance = document.getElementById("account-balance").innerText;
        const balance = parseFloat(accountBalance);
        //step 5
        const newBalance = balance - cashOutMoney;
        // step 6
        document.getElementById("account-balance").innerText = newBalance;
    }
    else {
        alert("Failed...! Please Correction Something")
    }

})