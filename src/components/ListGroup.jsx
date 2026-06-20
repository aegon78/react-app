import { useState } from 'react';


function ListGroup({items, heading}) {

  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && 'items not found'}

      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            className={
              selectedIndex === idx
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => (setSelectedIndex(idx))}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
