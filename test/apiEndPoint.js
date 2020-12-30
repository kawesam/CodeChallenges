
const fetch = require('node-fetch');
const url = 'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD';

(async () => {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
    let stringText = JSON.stringify(json).split(',')
    console.log(stringText[7]);

    for(let i = 0; i < stringText.length; i++)
    {
        if(i === 7){
        }
    }
})();




