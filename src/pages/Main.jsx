import React from 'react';
import Card from '../components/card/Card'

const Main = (props) => {
    const { data, loading } = props

  return (
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
  );
};

export default Main;
