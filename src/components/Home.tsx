import React from 'react'
import { useEffect,useState } from 'react';
import Header from './Header';
import { Pagination } from 'antd';
import { Container } from "react-bootstrap";
import Responses from './Responses';
const Home = () => {
    const [isloading, setIsLoading] = useState(true);
    const [items, setItems] = useState();
    const [query, setQuery] = useState("");
    useEffect(() => {
        const getbaddata = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {"Authorization" : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MjE3MDc0LCJqdGkiOiJjZDA1YzBiODdkNDI0NDYwODkzMjQxNjY3MTMzMTI1OCIsInVzZXJfaWQiOjQ2MX0.F2r0WfvkFRV1pv_9ZkqOdANN-uvuY0Ia51RSsLGhssI`} 
            };
          setIsLoading(true);
          const result = await fetch(
            'http://ct-forms-server-test.herokuapp.com/api/f852641a-34de-4563-a801-cc89de9dd77a/saved-data/',requestOptions)
            const parsedresult = await result.json();
            setItems(parsedresult.data);
            setIsLoading(false);
        };
        getbaddata();
      },[query]);
      console.log(items);
    return (
        <>
      <Header/>
        {
            items ?
            <>
            
            <Responses  data={items}/>
            {/* <Container className="d-flex justify-content-between my-3">
          
            <Pagination  style={{margin:'auto'}}  />
          </Container> */}
          </>
          :<h1>Loading</h1>
         
            
        }
    </>
  )
}

export default Home