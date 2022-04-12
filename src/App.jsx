import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import useFetchData from './api/api';
import Sidebar from './components/sidebar/Sidebar';
import Main from './pages/Main';
import Detail from './pages/Detail';

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
        <Route exact path="/">
          <Main data={data} loading={loading} />
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
