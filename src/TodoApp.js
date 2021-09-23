import React, { useState, useEffect } from 'react';
import './TodoApp.css';
import PartOne from './partOne';
function TodoApp(props) {
  const [shapes] = useState([
    {
      width: 46,
      height: 46,
      fill: '#ff1b1b',
    },
    {
      width: 46,
      height: 46,
      fill: '#1be8ff',
    },
    {
      width: 46,
      height: 46,
      fill: '#1bff49',
    },
    {
      width: 46,
      height: 46,
      fill: '#ffef1b',
    }
  ]);
  const [color, setColor] = useState(null);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    console.log("Am connected")
    return ()=> {
      console.log("Am disconnected");
    };
    },[isConnected]);

  return (

    <div className="big-container">
      <div className="set">
        {shapes.map(
          (shape, index) => {
            return (
              <div key={index} onClick={() => setColor(shape.fill)} className="formOne">
                <svg
                  id="Composant_6_1"
                  data-name="Composant 6 – 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={shape.width}
                  height={shape.height}
                  viewBox="0 0 46 46"
                >
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="23" cy="23" r="23" fill={shape.fill} />
                </svg>
              </div>
            )
          })
        }
      </div>
      <div className="BtN">
        <div onClick={() => setIsConnected(false)} className="one">
          <svg id="Button" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <circle id="Container" cx="15.5" cy="15.5" r="15.5" fill="#ff7482" />
            <path id="Tracé_2" data-name="Tracé 2" d="M5.937,11.784V23.327H19.669V11.784" transform="translate(2.697)" fill="none" stroke="#fff" strokewidth="1" />
            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(10 5)" fill="none" stroke="#fefefe" strokewidth="1">
              <circle cx="3" cy="3" r="3" stroke="none" />
              <circle cx="3" cy="3" r="2.5" fill="none" />
            </g>
            <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(14 14)" fill="none" stroke="#fefefe" strokewidth="1">
              <circle cx="2" cy="2" r="2" stroke="none" />
              <circle cx="2" cy="2" r="1.5" fill="none" />
            </g>
          </svg>
        </div>
        <div onClick={() => setIsConnected(true)} className="two">
          <svg id="Button" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <circle id="Container" cx="15.5" cy="15.5" r="15.5" fill="#7494ff" />
            <g id="Cross" transform="translate(-782 -233)">
              <line id="Ligne_1" data-name="Ligne 1" y2="12" transform="translate(797.5 242.5)" fill="none" stroke="#fff" strokewidth="1" />
              <line id="Ligne_2" data-name="Ligne 2" x2="10" transform="translate(792.5 248.5)" fill="none" stroke="#fff" strokewidth="1" />
            </g>
          </svg>

        </div>
      </div>
      {isConnected ? <PartOne fill={color} /> : "The component was disconnected"}
    </div>

  );
}

export default TodoApp;

