import { createContext,useEffect,useState } from "react";

export const CoinContext=createContext();

const CoinContextProvider=(props)=>{


    const [allcoin,setAllCoin]=useState([]);
    const [currency,setCurrency]=useState({
        name="usd",
        symbol="$",
    })

    const fetchAllcoin=async()=>{
        

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': '	CG-an5zAfm5vpjhPuf3YzPBzqVg'
        }
      };
      
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
        .then(response => response.json())
        .then(response => setAllCoin(response))
        .catch(err => console.error(err));

    }
    const ContextValue={

    }
    return(
        <CoinContext.Provider value={ContextValue}>
              {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;