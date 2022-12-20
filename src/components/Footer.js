import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import logo from '../images/logo.avif';
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
  
  const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
  `;

const Logo = styled.img`
	weight:20px;
	height: 100px;
`;
  
  const Desc = styled.p`
	margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
	display: flex;
  `;
  
  const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
  `;
  
  const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
	
  `;
  
  const Title = styled.h3`
	margin-bottom: 30px;
  `;
  
  const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
  `;
  
  const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
	
  `;
  
  const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
  `;
  
  const Payment = styled.img`
	  width: 50%;
  `;
  
  const Footer = () => {
	return (
		<Container>
			<Left>
			<Logo src = {logo}></Logo>
			<Desc>
				There are many variations of passages of Lorem Ipsum available, but
				the majority have suffered alteration in some form, by injected
				humour, or randomised words which don’t look even slightly believable.
			</Desc>
			<SocialContainer>
				<SocialIcon color="3B5999">
				<Link to ="https://www.facebook.com"><FacebookIcon /></Link>
				</SocialIcon>
				<SocialIcon color="E4405F">
				<Link to ="https://www.instagram.com"><InstagramIcon /></Link>
				</SocialIcon>
				<SocialIcon color="55ACEE">
				<Link to ="https://twitter.com"><TwitterIcon /></Link>
				</SocialIcon>
				<SocialIcon color="E60023">
				<Link to ="https://www.pinterest.com"><PinterestIcon /></Link>
				</SocialIcon>
			</SocialContainer>
			</Left>
			<Center>
			<Title>Useful Links</Title>
			<List>
				<ListItem><Link to="/">Home</Link></ListItem>
				<ListItem><Link to="/cart">Cart</Link></ListItem>
				<ListItem><Link to="/productList">Baby Clothes</Link></ListItem>
				<ListItem><Link to="/productList">Milk Bottoms</Link></ListItem>
				<ListItem><Link to="/productList">Toys</Link></ListItem>
				<ListItem>My Account</ListItem>
				<ListItem>Order Tracking</ListItem>
				
			</List>
			</Center>
			<Right>
			<Title>Contact</Title>
			<ContactItem>
				<RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
			</ContactItem>
			<ContactItem>
				<PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
			</ContactItem>
			<ContactItem>
				<MailIcon style={{marginRight:"10px"}} /> contact@magicplanet.com
			</ContactItem>
			<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
  };
  
  export default Footer;