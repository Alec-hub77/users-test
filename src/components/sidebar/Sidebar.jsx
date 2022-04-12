import './sidebar.scss';

import Button from '../button/Button';

const Sidebar = ({ sortData }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <h2>Sort</h2>
        <div className="btns">
          <Button onClick={(e) => sortData('name')}>Sort by name</Button>
          <Button onClick={(e) => sortData('city')}>Sort by city</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
