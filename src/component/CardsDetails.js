import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { Add, Remove, rmv } from '../redux/actions/action';

const CardsDetails = () => {
  const history = useNavigate();
  const [data, setData]=useState([])
  const dispatch=useDispatch();

  const deleteFn = (id)=>{
    dispatch(Remove(id));
    history('/'); 
}

  const {id}= useParams();

  const getData =useSelector((state)=>state.cartReducer.carts);
  // console.log(getData);
  const compare =()=>{

    let compareData = getData.filter((e)=>{
      return e.id == id
    })
    setData(compareData);
    
  }

  const send =(ele)=>{
    dispatch(Add(ele))
  }

  const remove = (item)=>{
    dispatch(rmv(item))
  }
  
  useEffect(()=>{
    compare();
  },[id])
  return (
   <>
    <div className="container mt-2">
      <h2 className="text-center">
        Item Details Page
      </h2>
      <section className="container mt-3">
        <div className="iteamsdetails d-flex justify-content-center align-items-center">
        {
          data.map((ele)=>{
            return(
              <>
              <div className="items_img">
             <img src={ele.imgdata}
          alt="" />
          </div>
          <div className="details">
          <Table>
            <tr>
              <td>
                <p><strong>Restaurant</strong>: {ele.rname} </p>
                <p><strong>Price</strong>: ₹ {ele.price} </p>
                <p><strong>Total</strong>: ₹ {ele.qnty * ele.price} </p>
                <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111", borderRadius:'5px',padding:'10px'}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>deleteFn(ele): ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>
              </td>
              <td>
              <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {ele.rating}★	</span></p>
              <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
              <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>deleteFn(ele.id)}></i>	</span></p>

              </td>
            </tr>
          </Table>

          </div>
              </>
            )
          })
        }
         
         
        </div>
      </section>
    </div>
   </>
  )
}

export default CardsDetails
