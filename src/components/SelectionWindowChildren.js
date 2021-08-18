import React from 'react';
import '../styles/components/App.css';
import ChildrenAge from './ChildrenAge';

function SelectionWindowChildren(props) {
  const children = [];
  for (let i = 0; i < props.childrenCount; i++) {
    children.push(<ChildrenAge key={i} />);
  }
  return (
    <>
      <div className="open_window_for_children">
        <p className="children_age">
          What is the age of the child you’re travelling
          with?
        </p>
        <div id="children_list">
          {children}
        </div>
      </div>
    </>
  );
}

export default SelectionWindowChildren;
