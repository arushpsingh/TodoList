import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom"

const TodoList = () =>{
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([])

  const itemEvent = (event) =>{
    setItem(event.target.value)
  }

  const listOfItem = () =>{
    setNewItem((prevValue) => {
      return [...prevValue, item]
    })
    setItem("")
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TodoList</h1>
          <br />
          <input type="text" placeholder="Add an item" onChange={itemEvent}/>
          <Button className="newBtn" onClick={listOfItem}>
            <AddIcon sx={{fontSize: 10}} />
          </Button>

          <br />
          <ol>
            {newItem.map((val, index) => {
              return <ListCom key={index} text={val} />
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  )
}

export default TodoList;