const digits = document.querySelectorAll('.digit');
const numDialed = document.getElementById('output')
const makeCall = document.getElementById('call');
const deleteDialedNumber = document.querySelector('.fa-long-arrow-left');

const accountSid = 'AC895cd5a77d0ac350b4c4f4fe836b7187';
const authToken = '56f44513d7209a9db64ae85bc6f7596d';
const hubApiKey = '634e31ac-08be-4675-8247-68c04859eda2'

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

makeCall.addEventListener('click', getContacts)

digits.forEach(handleDialClick);

deleteDialedNumber.addEventListener('click', deleteDigit);

function handleError(err) {
  console.log('Oh no');
  console.log(err);
}


function initiateCall () {
  console.log(`Calling ${calling}`);
  fetch(`https://dialpad-serverless-2578-dev.twil.io/outbound`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'message': "Hello from Node",
       'to': `+1${calling}`, // Text this number
       'from': '+12133206771',
    })
  })}

async function getContacts () {
  const res = await fetch(`https://dialpad-serverless-2578-dev.twil.io/getContacts`);
  const list = await res.json();
  const arrtoObj = (list, key) => {
    return list.reduce((obj, item) =>{
      obj[item[key]] = item
      return obj
    }, {})
  }
  // const phoneNo = list.results.filter(result => result.properties.phone === "8587747479");
  console.log(arrtoObj);

}




function deleteDigit () {
  calling = calling.substring(0, calling.length - 1);
  numDialed.textContent = calling;
}

