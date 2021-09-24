// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */

import { useState, useRef } from 'react';
import { css } from '@emotion/react'

import './TodoApp';

function PartOne(props) {

  const [listItems, setListItems] = useState([]);
  const inputRef = useRef(null);

  const addToDo = () => {
    const inputValue = inputRef.current.value;
    setListItems([...listItems, inputValue]);
    inputRef.current.value = ""

  }
  //css 
  const FistItem = css`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:${props.fill};
    margin-top:30PX;    
    width:287px;
    height:56px;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #cac2c2;

`
  const NewItem = css`
     border:0px solid #FFFFFF; 
     margin: 7px 8PX;   
     width:217px;
     height:40px;
     border-radius: 30px;
     box-shadow: 0px 2px 6px #dddddd;
     outline:none;
     &:hover {
      background-color:#d3b6f092;
  }
  &:focus {
     background-color:#FBFBFB;
        border:1px solid #7494FF;
  }
`
  const Undo = css`
        
        width:287px;
        height:241px;
        border-radius:25px;
        box-shadow: 0px 3px 6px #cac2c2;
        overflow: auto;
        margin-top:20px;
        align-items:center;
        ::-webkit-scrollbar {
        width: 7px;   
      }

::-webkit-scrollbar-thumb {
  background-color:lightgrey;
  border-radius:20px; 
  
} 
`
  const Output = css`
        background-color:#FFFFFF; 
        padding-top:10px;  
        align-self:center;
        margin: 10px auto;   
        width:217px;
        height:40px;
        border-radius: 30px;
        box-shadow: 0px 2px 6px #dddddd;
        outline:none;
        overflow:hidden;
`
  const botom = css`
        border-radius:50%;
        border:#707070;
        margin:  13px 2px;
        width:30px;
        height:32PX;
        color:#FBFBFB;
        font-size:20px;
        background-color:#7494FF;
        &:hover {
    box-shadow: 2px 4px 8px #cac2c2;
  }
`

  return (
    <div className="Container">
      <div css={FistItem}>
        <input css={NewItem} ref={inputRef}/>
        <button css={botom} onClick={() => addToDo()} > +</button>
      </div>
      <div css={Undo} >
        {
          listItems.map((item, index) =>
            <p css={Output} key={index}>{item}</p>)
        }
      </div>
    </div>
  )
}
export default PartOne;



