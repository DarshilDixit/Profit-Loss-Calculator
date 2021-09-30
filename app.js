var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var outputMSg = document.querySelector("#output-msg");

checkButton.addEventListener("click", clickHandler);

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cp)
};

function calculateProfitAndLoss(initial, quantity, current){
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
    
        showOutput(
          "Loss is " + loss + " and" + " the loss percentage is " + lossPercentage + "%"
        );
      } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
    
        showOutput(
            "profit is " + profit + " and" + "  the profit percentage is " + profitPercentage +"%."
        );
      } else {
        showOutput(`No pain no gain and no gain no pain`);
      }
}

function showOutput(message) {
     outputMSg.innerText = message;
}