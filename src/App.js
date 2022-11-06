import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData]=useState([])
  const [error, setError]=useState(false)

  const fetchData = () =>{
    axios({

      // method: 'GET',
      url: 'https://fake-ecommerce-server.herokuapp.com/products'

    }).then((rest)=>{
      setData(rest)
    }).catch((err)=>{
      setError(err)
    })
  }

    useEffect(()=>{
      fetchData()
    },[])
    console.log(data)
  return (
    <div>
      {data.map((e)=><h1>{e.data.title}</h1>)}
    </div>
  )
}

export default App