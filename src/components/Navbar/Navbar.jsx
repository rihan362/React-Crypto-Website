import React,{useContext} from 'react'
import  './Navbar.css';
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import {CoinContext }from '../../context/CoinContext'


const Navbar = () => {

 const { setcurrency } = useContext(CoinContext);
   

    const currencyHandler=(event)=>{
         switch (event.target.value){
            case "usd":{
                setcurrency({name:"usd",symbol:"$"});
                break;
            }
            case "eur":{
                setcurrency({name:"eur",symbol:"&"});
                break;
            }
            case "inr":{
                setcurrency({name:"inr",symbol:"#"});
                break;
            }
            default:{
                setcurrency({name:"usd",symbol:"$"});
                break;
            }

         }
    }
  return (
    <div className="navbar">
        <img src={logo} alt='/' className="logo" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="ind">IND</option>
            </select>

        </div>
            <button>Sign up <img src={arrow_icon} alt=""/></button>
    </div>
  )
}

export default Navbar


// {currencyHandler