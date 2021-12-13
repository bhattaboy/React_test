import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { loadColor } from "./actions/colorAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadColor());
  }, [dispatch]);
  const cl = useSelector((state) => state.colors);
  const [num, setNum] = useState(0);
  var color = cl.colors[num];
  //Array for displaying string and to change color
  const [firstArray, setFirstArray] = useState(["red"]);
  //Function to run on click
  const changeNumber = () => {
    const handleChange = () => {
      firstArray.push(color);
      const theArray = firstArray;
      setFirstArray(theArray);
    };
    //Function to select random number
    const repeatRandom = () => {
      return Math.floor(Math.random() * 5);
    };
    const stopLogic = () => {
      const randomNumber = repeatRandom();
      if (num === randomNumber) {
        stopLogic();
      } else if (num === 2) {
        setNum(1);
      } else {
        setNum(randomNumber);
      }
    };
    stopLogic();
    handleChange();
  };
  const sl = firstArray[firstArray.length - 1];
  return (
    <>
      <ChangeButton
        onClick={changeNumber}
        color={color}
        sl={sl}
        className="App"
      >
        Click Here
      </ChangeButton>
      {/* {color && <div className="stringColor">{String(firstArray)}</div>} */}

      {firstArray.map((data) => {
        return <span style={{ color: data }}>{data},</span>;
      })}
    </>
  );
}
let ChangeButton = styled.div`
  background: ${(props) => props.sl};
  height: fit-content;
  width: fit-content;
  padding: 20px;
  border: 2px solid black;
  cursor: pointer;
  font-size: 70px;
  color: purple;
`;
export default App;
