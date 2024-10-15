

import { createContext, useEffect, useState } from "react";

// Create the context
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allcoin, setAllCoin] = useState([]);
    const [currency, setcurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    const fetchAllcoin = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-an5zAfm5vpjhPuf3YzPBzqVg',
            },
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then((response) => response.json())
            .then((response) => setAllCoin(response))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchAllcoin();
    }, [currency]);

    const contextValue = {
        allcoin,
        currency,
        setcurrency,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

// Export the provider at the top level (outside the function)
export default CoinContextProvider;






// import { createContext,useEffect,useState,useContext } from "react";

// export const CoinContext=createContext();

// const CoinContextProvider=(props)=>{


//     const [allcoin,setAllCoin]=useState([]);
//     const [currency,setcurrency]=useState({
//         name:"usd",
//         symbol:"$"
//     })

//     const fetchAllcoin=async()=>{
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           'x-cg-demo-api-key': '	CG-an5zAfm5vpjhPuf3YzPBzqVg'
//         }
//       };
      
//       fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
//         .then(response => response.json())
//         .then(response => setAllCoin(response))
//         .catch(err => console.error(err));

//     }

//   useEffect(()=>{
//     fetchAllcoin();
//   },[currency])  

//   const contextValue = {
//     allcoin,
//     currency,
//     setcurrency,
// };
//     return(
//         <CoinContext.Provider value={contextValue}>
//               {props.children}
//         </CoinContext.Provider>
//     )


// export default CoinContextProvider;