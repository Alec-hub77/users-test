import './sidebar.scss';

import Button, { ButtonOutlined } from '../button/Button';
import { Link } from 'react-router-dom';

const Sidebar = ({ sortData }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2>Sort</h2>
        <div className="btns">
          <Button onClick={(e) => sortData('name')}>Sort by name</Button>
          <Button onClick={(e) => sortData('city')}>Sort by city</Button>
          <Link to="/"><ButtonOutlined>Go to main page</ButtonOutlined></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
