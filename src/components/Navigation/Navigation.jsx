import { NavLink } from 'react-router-dom';
//STYLES
import theme from 'theme';
import { Nav, LinkTitle, Hr } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              display: 'block',
              fontSize: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: isActive ? theme.colors.textRed : theme.colors.text,
            };
          }}
        >
          <LinkTitle>Home</LinkTitle>
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => {
            return {
              display: 'block',
              fontSize: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: isActive ? theme.colors.textRed : theme.colors.text,
            };
          }}
        >
          <LinkTitle>Movies</LinkTitle>
        </NavLink>
      </Nav>
      <Hr />
    </>
  );
};

export default Navigation;
