import React from 'react';
import { FixedSizeList as List } from 'react-window';//install npm install react-window@1.8.11


// Component for rendering each row in the virtualized list
const Row = ({ index, style }) => (
  <div style={style}>
    Item {index + 1}
  </div>
);
//Render only visible list items instead of all at once.
const MyVirtualizedList = () => {
  const itemCount = 1000; // Total number of items in the list
  const itemSize = 50;    // Fixed height of each row in pixels
  const listHeight = 500; // Height of the list container in pixels
  const listWidth = 300;  // Width of the list container in pixels

  return (
    <List
      height={listHeight}
      itemCount={itemCount}
      itemSize={itemSize}
      width={listWidth}
    >
      {Row}
    </List>
  );
};

export default MyVirtualizedList;