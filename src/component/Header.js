import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';

const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const getData = useSelector((state) => {
    console.log(state);
    return state.cartReducer.carts;
  }

  )
  console.log(getData);




  return (
    <>
      <Navbar bg="dark" variant="dark" className='p-3'>
        <Container>
          <NavLink to='/' style={{ textDecoration: 'none', fontSize: "22px" }} className='text-light'>All Products</NavLink>



          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: "22px" }}></i>
          </Badge>

        </Container>

        <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
        {/* cart code start */}
        {
          getData.length ?
            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getData.map((e) => {
                    console.log(e); 
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                              </NavLink>
                            </td>
                            <td >
                              <p>{e.rname}</p>
                              <p>Price : ₹{e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                              <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}  >
                                <i className='fas fa-trash smalltrash'></i>
                              </p>
                            </td>

                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} >
                              <i className='fas fa-trash largetrash'></i>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                  <p className="text-center mt-1">Total :₹ 300</p>
                </tbody>
              </Table>


            </div>
            :

            
              <div className="cart_detail d-flex p-3">
                <i className='fas fa-close smallclose' style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} onClick={handleClose}></i>
                <p className='m-1 p-2' style={{ fontSize: '22px' }}>Your cart is empty </p>
                <img src="./cart.gif" alt="" style={{ width: '50px' }} className='mt-2' />

              </div>
            }

            </Menu>

       


      </Navbar>



    </>
  );



}


export default Header