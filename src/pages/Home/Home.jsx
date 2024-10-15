import React from 'react'
import './Home.css'
import {CoinContext} from '../../context/CoinContext'
import {useContext,useEffect,useState} from 'react';

const Home = () => {


    const {allcoin,currency}=useContext(CoinContext);
    const [displaycoin, setdisplaycoin] = useState([]);


    useEffect(()=>{
        setdisplaycoin(allcoin);
    },[allcoin]);


  return (
    <div className="Home">
        <div className="hero">
            <h1>Largest <br/>Crypto MarketPlace</h1>
            <p>Welcome to the world's largest cryptocurrency MarketPlace.Signup
                to Explore more content
            </p>
            <form>
                   <input type="text" placeholder="Search Crypto..."/>
                    <button type="submit"></button>

            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H Change</p>
                <p className="market-cap">Market Cap</p>
            
            </div>
          {
            displaycoin.slice(0,10).map((item,index)=>(
                <div className="table-layout">
                    <p>{item.market_cap_rank}</p>
                    <div>
                        <img src={item.image} alt="/"/>
                        <p>{item.name + "-" +item.symbol}</p>
                    </div>
                    <p>{currency.symbol} {item.current_price}</p>
                    <p className={item.price_change_percentage_24h>0 ? "green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                    <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
                </div>
            ))
          }
           

        </div>
    </div>
  )
}

export default Home