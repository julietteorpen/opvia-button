/*-------------------------------------------*\
  VARIABLES
\*-------------------------------------------*/
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let countTotal = document.querySelector("#count-total");
let reset = document.querySelector("#reset");

let newTotal = countTotal.value;

/*-------------------------------------------*\
  FUNCTION
\*-------------------------------------------*/
function increaseCount(event) {
  if (event.target.value === "+") {
    newTotal++;
  } else if (event.target.value === "-") {
    newTotal--;
  } else {
    return newTotal;
  }
  return (document.querySelector("#count-total").value = newTotal);
  // if(event.target.increase)
}

function resetFunc(event) {
  return (document.querySelector("#count-total").value = 0);
}
/*-------------------------------------------*\
  EVENT LISTENER
\*-------------------------------------------*/
increase.addEventListener("click", increaseCount);
decrease.addEventListener("click", increaseCount);
reset.addEventListener("click", resetFunc);
