import { useState } from 'react';


function ListGroup({items, heading, onSelectItem}) {

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
            onClick={() => (setSelectedIndex(idx), //the instructor didn't add a column here and yet his code worked!
            onSelectItem(item)
            
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
