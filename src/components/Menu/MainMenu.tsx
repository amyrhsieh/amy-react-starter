import styled from 'styled-components';
import colors from 'utils/colors';

const MenuItem = styled.div`
  cursor: pointer;
  padding: 50% 0;
`;

const Branding = styled.div`
  font-weight: bold;
  left: 30px;
  position: absolute;
`;

const StyledMainMenu = styled.div`
  align-items: center;
  background-color: ${colors.primaryMed};
  color: ${colors.white};
  display: flex;
  flex-grow: 1;
  gap: 50px;
  height: 50px;
  justify-content: center;
  position: sticky;
  top: 0;
`;

const MainMenu = () => (
  <StyledMainMenu>
    <Branding>hello world</Branding>
    <MenuItem>Menu 1</MenuItem>
    <MenuItem>Menu 2</MenuItem>
  </StyledMainMenu>
);

export default MainMenu;
