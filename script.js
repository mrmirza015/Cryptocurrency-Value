var btc = document.getElementById("bitcoin");
var etr = document.getElementById("ethereum");
var dgc = document.getElementById("dogecoin");

var setting = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method": "GET",
    "headers": {}
}

$.ajax(setting).done(function (response) {
    btc.innerHTML = response.bitcoin.inr;
    etr.innerHTML = response.ethereum.inr;
    dgc.innerHTML = response.dogecoin.inr;
})