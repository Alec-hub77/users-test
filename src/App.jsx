import './App.scss';
import Button, { ButtonOutlined } from './components/button/Button';

import { BrowserRouter, Route } from 'react-router-dom';
import useFetchData from './api/api';
import Sidebar from './components/sidebar/Sidebar';
import Card from './components/card/Card';

function App() {
  const { data, setData, loading } = useFetchData(
    'https://jsonplaceholder.typicode.com/users'
  );

  const sortData = (order) => {
    if (order === 'name') {
      const sorted = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(sorted);
      setData(sorted);
    } else {
      if (order === 'city') {
        const sorted = [...data].sort((a, b) =>
          a.address.city > b.address.city ? 1 : -1
        );
        console.log(sorted);
        setData(sorted);
      }
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar sortData={sortData} />
      <div className="content">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>Users List</h2>
            {data?.map((item) => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))}
          </>
        )}
      </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
