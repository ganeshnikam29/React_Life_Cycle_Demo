import React from 'react';
import './Button.css';

export const Button = ({ message, children, handleClick, classNames }) => {
  // function handleClick(recivedMessage) {
  //   console.log(recivedMessage);
  // }

  return (
    //   <div>

    //     {/* <button onClick={() => handleClick()}>Show greetings</button>

    //     <button
    //       onClick={() => {
    //         console.log('Button Clicked inlineFunction');
    //       }}
    //     >
    //       Show greetings
    //     </div>
    // );
    <div onClick={() => console.log('Parent Clicked')}>
      <button
        className={classNames}
        onClick={(e) => {
          e.stopPropagation();
          //console.log('Button Clicked');
          handleClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};

// Event Bubling
// Can we read component porp in Event hanlder =>  Yes

// onClick={handleClick()} // function calling => wrong
//onClick= {handleClick} //function Passing => correct
