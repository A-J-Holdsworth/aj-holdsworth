import "./Header.scss";
import Menu from "./Menu";
import { MobileMenu } from "./MobileMenu";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="header-cont">
      <div className="header">
        {/* <Avatar className='avatar'>AH</Avatar> */}
        <span className="name">Solihull PC Help</span>
        {!isMobile ? <Menu /> : <MobileMenu />}
      </div>
    </div>
  );
};

export default Header;
