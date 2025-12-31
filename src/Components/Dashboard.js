import React, { useState } from 'react';
import CustomerCard from './CustomerCard';

const customers = [
  { id: 1, name: 'Jenny Haul', company: 'Tesla', status: 'Active' },
  { id: 2, name: 'John Doe', company: 'Acme Corp', status: 'Inactive' },
  { id: 3, name: 'Jane Smith', company: 'Tech Solutions', status: 'Active' }
];

function Dashboard() {
  const [search, setSearch] = useState('');

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="Søk etter kunde eller firma"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredCustomers.map(c => (
        <CustomerCard key={c.id} customer={c} />
      ))}
    </div>
  );
}

export default Dashboard;

