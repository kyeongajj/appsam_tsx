import '../../css/Aside.css';
import { Box } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { SvgIconComponent } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Aside = () => {
  return (
    <Box>
      <div className="Aside">
        <Box>
          <SvgIcon component={AccountBalanceIcon} inheritViewBox />
          <h3 className="asideTitle">ASIDE</h3>
        </Box>
        <ul className="AsideMenuWrap">
          <li className="AsideMenu">Dashboard</li>
          <li className="AsideMenu">
            INTERFACE
            <ul className="AsideMenuDepth">
              <li>
                <a href="#">Components</a>
              </li>
              <li>
                <a href="#">Utilities</a>
              </li>
            </ul>
          </li>
          <li className="AsideMenu">
            ADD
            <ul className="AsideMenuDepth">
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Charts</a>
              </li>
            </ul>
          </li>
          <li className="AsideMenu">Tables</li>
          <li className="AsideMenu">Dashboard</li>
        </ul>
      </div>
    </Box>
  );
};

export default Aside;
