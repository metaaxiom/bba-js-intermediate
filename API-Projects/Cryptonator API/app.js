const price = document.querySelector('#price');
const submitBtn = document.querySelector('#submitBtn');

const printPrice = async () => {
    const priceText = await fetchBitCoinInfo();
    const newText = document.createElement('P');
    newText.append(priceText);
    price.append(newText);
}

const fetchBitCoinInfo = async () => {
    try {
        const response = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await response.json()
        return data.ticker.base + " " + data.ticker.price + " " + data.ticker.change  + " " + data.ticker.base;
    }
    catch(error) {
        console.log("ERROR", error);
    }
}

submitBtn.addEventListener('click', printPrice);