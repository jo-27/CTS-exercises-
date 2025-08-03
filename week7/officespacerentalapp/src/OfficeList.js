import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: "Alpha Workspaces",
      rent: 45000,
      address: "100 Business Park, Bangalore",
      image: "/img1.jpeg"
    },
    {
      name: "Gamma Co-Work",
      rent: 60000,
      address: "300 Startup Hub, Pune",
      image: "/img3.jpeg"
    }
  ];

  return (
    <div>
      <h1>Office Space Rental</h1>
      {offices.map((office, index) => (
        <div key={index} style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <img src={office.image} alt="office" />
          <h2>{office.name}</h2>
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
