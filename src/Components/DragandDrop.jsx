import React, { useState, useRef } from "react";
const DragandDrop = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "Drag Item 1",
    "Drag Item 2",
    "Drag Item 3",
    "Drag Item 4",
    "Drag Item 5",
    "Drag Item 6",
  ]);
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log("", e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
    <h1>Drag and Drop w/o any library.</h1>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "red",
              borderRadius: "10px",
              width: "500px",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
};
export default DragandDrop;
