import React from 'react'
import {  Badge } from "react-bootstrap";
import {Col,Row,Card,Button} from 'antd';
const Responses = (data:any) => {
    console.log(data)
  return (
     
        <>
        {data?data.data.map((item:any) => {
            item.data.map((item1:any)=>(
                console.log(item1.response)
            ))
            }):<h1>loading</h1>}
      </>
     
    

  )
}

export default Responses