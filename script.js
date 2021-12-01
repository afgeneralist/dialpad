const digits = document.querySelectorAll('.digit');
const numDialed = document.getElementById('output')
const makeCall = document.getElementById('call');
const deleteDialedNumber = document.querySelector('.fa-long-arrow-left');


let calling = "";

function dialButton(event) {
  const button = `${event.currentTarget.childNodes[0].textContent}`.trim();
  calling = calling.concat('', button);
  if (calling.length < 11) {
  numDialed.textContent = calling;
  } else {
    return;
  }
}

//event listeners
function handleDialClick (digit) {
    digit.addEventListener('click', dialButton)
}

makeCall.addEventListener('click', initiateCall)

digits.forEach(handleDialClick);

deleteDialedNumber.addEventListener('click', deleteDigit);


function initiateCall () {
  alert(`Calling ${calling}`);
}

function deleteDigit () {
  calling = calling.substring(0, calling.length - 1);
  numDialed.textContent = calling;
}


