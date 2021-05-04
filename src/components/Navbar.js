import styled, { css } from "styled-components";

const Navbar = ({width}) => {
	console.log('width of navbar', width)
	return (
		<DesktopNav width={width}> 
		<div className="logo">
      FEMS 0.05
    </div>
		<Ul >
{/*      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>*/}
    </Ul></DesktopNav>
	)	
}

export default Navbar

const DesktopNav = styled.nav`
  background: linear-gradient(135deg, #141414 0%,#9e9d9d 100%);
  width: ${({width})=> width ? width : '100%'};
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
   .logo {
   	display: flex;
   	position: fixed;
    flex: 2;
    color: white;
    font-size: 32px;
    padding-top:10px;
  }
  font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color:white;
  li {
    padding: 10px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
