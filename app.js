const inputCardNo = document.querySelector("input");
const inputBtn = document.querySelector("button");
const cardNo = document.querySelector(".card-no");
const validity = document.querySelector(".validity");

inputBtn.addEventListener("click", getCardNo);
inputCardNo.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getCardNo();
  }
});

function getCardNo() {
  const cardno = inputCardNo.value;

  if (!cardno) {
    validity.classList.remove("valid");
    validity.classList.remove("invalid");
    validity.innerHTML = "Please enter a card number";
    return;
  }

  cardNo.innerHTML = `Card No:  ${cardno}`;
  const evenSum = evenSumCal(cardno);
  const oddSum = oddSumCal(cardno);
  const result = validityCheck(evenSum, oddSum);

  if (result === "Valid") {
    validity.classList.remove("invalid");
    validity.classList.add("valid");
  } else {
    validity.classList.remove("valid");
    validity.classList.add("invalid");
  }
  validity.innerHTML = `Card you entered is ${result}`;

  inputCardNo.value = "";
}

function evenSumCal(number) {
  let sum = 0;
  let temp;
  let temp2;

  for (let i = number.length - 2; i >= 0; i -= 2) {
    temp = parseInt(number[i]) * 2;
    temp2 = String(temp);

    let total = 0;

    for (let j = 0; j < temp2.length; j++) {
      total = total + parseInt(temp2[j]);
    }

    sum += total;
  }

  return sum;
}

function oddSumCal(number) {
  let sum = 0;
  let temp;

  for (let i = number.length - 1; i >= 0; i -= 2) {
    temp = parseInt(number[i]);
    sum += temp;
  }

  return sum;
}

function validityCheck(even, odd) {
  let sum = even + odd;
  let result;

  if (sum % 10 == 0) {
    result = "Valid";
  } else {
    result = "Invalid";
  }

  return result;
}
