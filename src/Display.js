import React from 'react';

const Display = ({ data }) => {

return (
    <div>
        <h3>Entered Data:</h3>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Address: {data.address}</p>
      <p>Address 2: {data.address2}</p>
      <p>City: {data.city}</p>
      <p>Province: {data.province}</p>
      <p>Postal Code: {data.postalCode}</p>
    </div>
);


};

export default Display;