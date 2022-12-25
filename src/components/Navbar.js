import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../images/logo.avif';
import { useSelector } from "react-redux";





const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Title = styled.h1`
  font-weight: bold;
  color: pink;
`
const Logo = styled.img`
	weight:30px;
	height: 100px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  `
  
const Navbar = () =>{
  const quantity = useSelector(state=>state.cart.quantity)
	return(
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
					<Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
				</Left>
				<Center>
				<Logo src = {logo}></Logo>
				<Title>Magic Planet</Title>
				</Center>
				<Right>
        <MenuItem>
        <Link to="/register" style={{textDecoration:"none", color:"black"}}>REGISTER</Link>
        </MenuItem>
            <MenuItem><Link to ="/login" style = {{textDecoration:"none", color:"black"}}>SIGN IN</Link></MenuItem>
            <Link to ="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon />
              </Badge>
            </MenuItem>
            </Link>
				</Right>
			</Wrapper>
		</Container>
	)
}


export default Navbar;