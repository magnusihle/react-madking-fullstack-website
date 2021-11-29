
import styled from "styled-components";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import RoomIcon from '@mui/icons-material/Room';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { mobile } from "../../reusableFunctions/responsive";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>  <Logo>MadKing</Logo></Link>


        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          {/* <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedInIcon />
          </SocialIcon> */}
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Hjem</ListItem>
          <ListItem>Om oss</ListItem>
          <ListItem>Våre beats</ListItem>
          <ListItem>Kontakt oss</ListItem>
          <ListItem>Logg inn</ListItem>

        </List>
      </Center>
      <Right>
        <Title>Våre betalingsløsninger</Title>
        {/* <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneIphoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AlternateEmailIcon style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem> */}
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;



const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: var(--color-1);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`;

const Logo = styled.h1``;

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
  color: white;

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
  color: white;

  ${mobile({ backgroundColor: "#214554" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;