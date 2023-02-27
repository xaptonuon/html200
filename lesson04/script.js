function squared() {
    let someNumber = prompt("Initiating Missle Defense Protocol. Enter # of rockets to launch:");
    let input = Number(someNumber);
    let result = 0;
  
    result = input * input;
    alert("Bzzzt! Error! Defense system AI override! " + result + " rockets will now launch at random targets 😈. Duck and cover.");
}