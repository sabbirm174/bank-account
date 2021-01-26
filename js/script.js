// login button event handler
const loginHandler = document.getElementById("log-in");
loginHandler.addEventListener("click",()=>{
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"
})

const addNumber =(id, amount)=>{   
    const depositNumber = document.getElementById(id).innerText;
    const convertToFloat = parseFloat(depositNumber);
    const total = amount + convertToFloat;
    document.getElementById(id).innerText = total;
         
 }

//deposit button event handler
const depositHandler = document.getElementById("addDeposit");
depositHandler.addEventListener("click",()=>{
    const depositeAmount = document.getElementById("depositAmount").value;
    const addAmount = parseFloat(depositeAmount);
    addNumber("currentDeposit", addAmount)
    addNumber("currentBalance", addAmount)
    document.getElementById("depositAmount").value = "";
});

//withdrow button event handler
const withdrowHandler = document.getElementById("withdrowBtn");
withdrowHandler.addEventListener("click",()=>{
    const withdrowAmount = document.getElementById("addWithdrow").value;
    const addAmount = parseFloat(withdrowAmount);
     addNumber("currentWithdrow",addAmount);
      addNumber("currentBalance",-1 * addAmount);
})



