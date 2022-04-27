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
    
    var totalIp = ip * qty

    calculateProfitAndLoss(ip, qty, cp)
};

function calculateProfitAndLoss(initial, quantity, current){
    if( initial && quantity){
        if (initial > current) {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / totalIp) * 100;
        
            showOutput(
              "Loss is " + loss + " and" + " the loss percentage is " + lossPercentage + "%"
            );
          } else if (current > initial) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / totalIp) * 100;
        
            showOutput(
                "profit is " + profit + " and" + "  the profit percentage is " + profitPercentage +"%."
            );
          } else {
            showOutput("No Pain No Gain And No Gain No Pain");
          }
    }else{
        showOutput("Please Enter All The Fields.")
    }
}

function showOutput(message) {
     outputMSg.innerText = message;
}
