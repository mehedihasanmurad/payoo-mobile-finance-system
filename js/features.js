
//toggle
// cash out button ar jonno
document.getElementById("btn-show-cash-out-money").addEventListener("click", function () {
    //hidden ache oita remove korbo
    document.getElementById("cash-out-form").classList.remove("hidden");
    //hidden ta visible korbo add ar maddome
    document.getElementById("add-money-form").classList.add("hidden");
})

//add money button ar jonno
document.getElementById("btn-show-add-money").addEventListener("click", function () {
    //hidden ta remove korci
    document.getElementById("add-money-form").classList.remove("hidden");
    //hidden take add korci
    document.getElementById("cash-out-form").classList.add("hidden");
})