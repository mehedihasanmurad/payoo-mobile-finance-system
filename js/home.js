

//step 1 : button take dhora
document.getElementById("btn-add-money").addEventListener("click", function () {
    
    // step 2 : amount input take dhora 
    const addAmountInput = document.getElementById("input-amount-money").value;
    //step 2.1 : password input take dhora
    const pinNumberInput = document.getElementById("input-pin-number").value;
    
    //step 3 : verify pin number
    //wrong way to the validate system
    if (pinNumberInput === "1122") {
        //step 4 : account balance take dhorlam
        const accountBalance = document.getElementById("account-balance").innerText;
        
        //step 5 : addAmountInput ar sathe add korbo accountBalance
        const amountInput = parseFloat(addAmountInput);
        const balance = parseFloat(accountBalance);
        const updateBalance = amountInput + balance;

        //step 6 : set account-balance ar sathe updateBalance
        document.getElementById("account-balance").innerText = updateBalance;
    }
    else {
        alert("Wrong pin number")
    }
})