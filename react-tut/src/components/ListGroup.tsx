//done patent to child and vice versa communication

// import { MouseEvent } from "react";
import { useState } from "react";

interface ListGroupProps {
  //defining type of props
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //TO SEND VALUE FROM CHILD TO PARENT
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //TO MODIFY DOM WHEN VALUE CHANGES for setting active class

  // const handleClick = (event: MouseEvent) => {              //TO HANDLE CLICK EVENT
  //   console.log(event.target);
  // };

  function handleClick(item: string, index: number) {
    //CONSOLE LOG VALUE BY EXT. FUNCTION
    setSelectedIndex(index);
    // console.log(item);
    onSelectItem(item); //TO SEND VALUE FROM CHILD TO PARENT
  }
  return (
    <>
      <h2>{heading}</h2>

      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group mb-3">
        {items.map(
          (
            item,
            index //loop as vfor or ngfor
          ) => (
            <li
              className={
                //change alert class based on index
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              style={{ cursor: "pointer" }}
              // onClick={() => console.log(item)}   //SIMPLE CONSOLE LOG ON CLICK
              // onClick={handleClick}    //TO HANDLE CLICK EVENT
              onClick={() => handleClick(item, index)}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
