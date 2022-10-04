import { useState, useEffect } from "react";



function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      });
    }, [])
    return (
      <div>
        <h1>The Coins</h1>
        {loading ? <strong>Loading...</strong> : null}
        <ul>
          {coins.map((coin) => <li key={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>)}
        </ul>
      </div>
    );    
}

export default Coin;