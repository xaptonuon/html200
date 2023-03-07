let balance = 500;

function start() {
    let doBanking = true;
    while (doBanking) {
        doBanking = getUserInput();
    }
}

function getUserInput() {
   const response = prompt('Welcome to Online Banking. Please choose a transaction: Enter Q to quit. Enter W for a withdrawal. Enter D to make a deposit. Enter B to view current balance.');
   switch(response) {
       case "Q": case "q":
           alert('Thank you for using Online Banking--goodbye!');
           return false;

        case "W": case "w":
            const amount = prompt('Please enter the amount of your withdrawal:');
            const newBalance = balance - Number(amount);
            if(newBalance < 0 ) {
                alert('Your account is currently showing insufficient funds.');   
            } else {
                balance = newBalance;
                alert('Your account has been debited $'+ amount + '.');
            }
            return true;

        case "D": case "d":
            let depositAmount = prompt('Please enter the amount of your deposit:');
            depositAmount = Number(depositAmount);
            const MaxDepositCap = 50000; 
            if(balance + depositAmount > MaxDepositCap) {
                alert('You are not allowed to deposit more than $50,000.')
            } else {
                balance += depositAmount;
                alert('Your account will be credited $'+ depositAmount + '.');
            }
            return true;

        case "B": case "b":
            alert('Your account currently shows a blance of $' + balance + '.');
            return true;

        default:
            alert('Invalid entry, please try again.');
            return true;

   }
}