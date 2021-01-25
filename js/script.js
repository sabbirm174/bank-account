var clickMe = document.getElementById("log-in");
clickMe.addEventListener("click",()=>{
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})