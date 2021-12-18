let initialPrice = document.querySelector("#initial-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

const imgProfit = document.createElement("img");

const imgLoss = document.createElement("img");

const imgEven = document.createElement("img");


function submitHandler() {
  let ip = Number(initialPrice.value);
  let qty = Number(stockQuantity.value);
  let curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial === "" || quantity === "" || current === "") {
    outputBox.innerHTML = "Please enter all the values.<br><br>";
  } else if (
    Number.parseInt(quantity) <= 0 ||
    Number.parseInt(initial) <= 0 ||
    Number.parseInt(current) <= 0
  ) {
    outputBox.innerHTML = "Please enter values greater than 0.<br><br>";
  } else if (current > initial) {
    let profit = ((current - initial) * quantity).toFixed(2);
    let profitPercentage = ((current - initial) / (initial / 100)).toFixed(2);
    outputBox.innerHTML =
      "You gained " +
      profitPercentage +
      "%</br>Your total profit is ₹ " +
      profit +
      "<br><br>";
    document.querySelector("#output-box").appendChild(imgProfit);
  } else if (initial > current) {
    let loss = ((initial - current) * quantity).toFixed(2);
    let lossPercentage = ((initial - current) / (initial / 100)).toFixed(2);
    outputBox.innerHTML =
      "You lost " +
      lossPercentage +
      "%</br>Your total loss is ₹ " +
      loss +
      "<br><br>";
    document.querySelector("#output-box").appendChild(imgLoss);
  } else {
    outputBox.innerHTML = "You make neither a profit nor a loss. <br><br>";
    document.querySelector("#output-box").appendChild(imgEven);
  }
}