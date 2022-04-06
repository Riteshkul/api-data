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
                headers: {"Authorization" : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MzMzMTcxLCJqdGkiOiI5M2I1Y2Y1MzRlOTU0MWJiODIzZDRkMTIyMTA2MTNlZSIsInVzZXJfaWQiOjQ2MX0.sP5YTpuLUUBCW-88AI2cdUzixokYsJpFxGP7YMnFK8E`} 
            };
          setIsLoading(true);
          const result = await fetch(
            'http://ct-forms-server-test.herokuapp.com/api/37f61b77-717f-45f7-8e34-765265ea75c5/saved-data/',requestOptions)
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
            <Container className="d-flex justify-content-between my-3">
          
            <Pagination  style={{margin:'auto'}}  />
          </Container>
          </>
          :<h1>Loading</h1>
         
            
        }
    </>
  )
}

export default Home