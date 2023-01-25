import React, { useState } from 'react'
import CardsData from './CardData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Add } from '../redux/actions/action';


const Cards = () => {
    const [data, useData]= useState(CardsData);
    const dispatch = useDispatch();

    const send =(ele)=>{
      dispatch(Add(ele))
    }
    // console.log(send);
  return (<>
    <h4 className='text-center m-2'>All Product Details</h4>
    <div className='row d-flex justify-content-center align-items-center'>
    {
        data.map((ele,id)=>{
      
          return( 
             <Card style={{ width: '18rem' }} className='card_style'>
      <Card.Img variant="top" src={ele.imgdata} style={{height:'250px',borderRadius:'5px'}} className='mt-2'/>
      <Card.Body>
        <Card.Title>{ele.rname}</Card.Title>
        <Card.Text> Price: 
        ₹ {ele.price}
        </Card.Text>
        <Button variant="primary" className='text-center' style={{width:'99%'}} onClick={()=>send(ele)}>Add to cart</Button>
      </Card.Body>
    </Card>)
        })
    }
    </div>
    
    </>
  )
}

export default Cards