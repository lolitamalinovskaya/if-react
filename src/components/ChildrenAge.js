import React from 'react';
import '../styles/components/App.css';

function ChildrenAge() {
  const options = [];
  for (let i = 0; i < 18; i++) {
    options.push(<option key={i}> {i} years old </option>)
  }
  return (
    <select className="select_children">
      { options }
    </select>
  );
}
export default ChildrenAge;
