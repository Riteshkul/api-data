import React from 'react'
import { useEffect,useState } from 'react';
import Header from './Header';
import { Pagination } from 'antd';
import { Container } from "react-bootstrap";
import Responses from './Responses';
const Home = () => {
    const [isloading, setIsLoading] = useState(true);
    const [items, setItems] = useState();
    const [response_count, setResponseCount] = useState();
    const [query, setQuery] = useState("");
    let [page, setpageNo] = useState(1);
    const pageSize=3;
    let total;
    useEffect(() => {
        const getbaddata = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {"Authorization" : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MzMzMTcxLCJqdGkiOiI5M2I1Y2Y1MzRlOTU0MWJiODIzZDRkMTIyMTA2MTNlZSIsInVzZXJfaWQiOjQ2MX0.sP5YTpuLUUBCW-88AI2cdUzixokYsJpFxGP7YMnFK8E`} 
            };
          setIsLoading(true);
          const result = await fetch(
            `http://ct-forms-server-test.herokuapp.com/api/f852641a-34de-4563-a801-cc89de9dd77a/saved-data/?page=${page}&size=3`,requestOptions)
            const parsedresult = await result.json();
            console.log(parsedresult)
            setResponseCount(parsedresult.count);
            setItems(parsedresult.data);
            setIsLoading(false);
        };
        getbaddata();
      },[query]);
      // console.log(response_count)
      const updateNews=async()=>{
        const requestOptions = {
          method: 'GET',
          headers: {"Authorization" : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MzMzMTcxLCJqdGkiOiI5M2I1Y2Y1MzRlOTU0MWJiODIzZDRkMTIyMTA2MTNlZSIsInVzZXJfaWQiOjQ2MX0.sP5YTpuLUUBCW-88AI2cdUzixokYsJpFxGP7YMnFK8E`} 
      };
        const result = await fetch(
          `http://ct-forms-server-test.herokuapp.com/api/f852641a-34de-4563-a801-cc89de9dd77a/saved-data/?page=${page}&size=3`,requestOptions);
          const parsedresult = await result.json();
          console.log(parsedresult)
          setResponseCount(parsedresult.count);
          setItems(parsedresult.data);
          setIsLoading(false);
      }
    
      const nextpage = async (page:number) => {
       console.log(page);
        setpageNo(page);
        updateNews();
      };
      total=response_count?response_count*3:response_count;
    return (
        <>
      <Header/>
        {
            items ?
            <>
            
            <Responses  data={items}/>
            <Container className="d-flex justify-content-between my-3">
          
            <Pagination  style={{margin:'auto'}} total={total} onChange={nextpage} current={page}  />
          </Container>
          </>
          :<h1>Loading</h1>
         
            
        }
    </>
  )
}

export default Home