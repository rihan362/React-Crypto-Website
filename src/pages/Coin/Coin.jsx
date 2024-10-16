import React from 'react'
import {useContext,useEffect,useState} from 'react';
import './Coin.css'
import {useParams} from 'react-router-dom';
import {CoinContext} from '../../context/CoinContext'

const Coin = () => {

  const {coinId}=useParams();
  const [coinData,setCoinData]=useState();
  const [currency]=useContext(CoinContext);

  const fetchCoinData=async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-pro-api-key': '	CG-an5zAfm5vpjhPuf3YzPBzqVg'}
    };
    
    fetch(`https://pro-api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response) )
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
  },[currency])
  





if(coinData)
{
  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image.large} alt=""/>
        <p><b>{coinData.name} ({coinData.symbol.toUpperCaste()})</b></p>
      </div>
    </div>
  )

}
else
{
  return(
    <div className="spinner">
      <div className="spin"></div>
    </div>
  )
}
}

export default Coin