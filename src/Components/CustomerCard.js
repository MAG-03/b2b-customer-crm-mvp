import React from 'react';

function CustomerCard({ customer }) {
  const statusColor = customer.status === 'Active' ? 'green' : 'red';

  return (
    <div className="customer-card">
      <h3>{customer.name}</h3>
      <p>Company: {customer.company}</p>
      <p>Status: <span style={{ color: statusColor }}>{customer.status}</span></p>
    </div>
  );
}

export default CustomerCard;

