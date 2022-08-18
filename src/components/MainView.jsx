import { useState, useEffect } from "react";
import { getWritersArray } from "../back4app/service_Init";
// import { db } from "../firebase/firebaseApp";
// import { getDocs, collection } from "firebase/firestore";

const MainView = () => {
  const [counter, setCounter] = useState(0);
  const [requestData, setRequestData] = useState(null);
  const [nickImage, setNickImage] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [message, setMessage] = useState(null);

  const handleClick = (e) => {
    if (requestData !== null) {
      if (e.target.value === "left" && counter !== 0) {
        setCounter(counter - 1);
      } else if (
        e.target.value === "right" &&
        counter !== requestData.length - 1
      ) {
        setCounter(counter + 1);
      }
    }
  };

  const insertData = (data) => {
    let array = [];
    data.forEach((element) => {
      array.push(element);
    });
    return array;
  };

  useEffect(() => {
    if (requestData === null) {
      getWritersArray().then((data) => {
        setRequestData(insertData(data));
      });
    } else {
      setNickName(requestData[counter].attributes.NickName);
      setNickImage(requestData[counter].attributes.NickImage._url);
      setMessage(requestData[counter].attributes.Message);
    }
  }, [requestData, counter]);

  return (
    <div>
      <div className="border p-2 mx-auto">
        {requestData !== [] && (
          <img
            className="block"
            src={nickImage !== null ? nickImage : ""}
            alt=""
          />
        )}
      </div>
      <div className="border p-2">
        <h3>{nickName !== null && nickName}</h3>
        <p>{message !== null && message}</p>
      </div>
      <div className="container flex justify-around items-center">
        <button
          onClick={handleClick}
          value={"left"}
          className="bg-red-600 font-size-xl"
          id="btn_Left"
        >
          {"<"}
        </button>
        <button
          onClick={handleClick}
          value={"right"}
          className="bg-blue-600 font-size-xl"
          id="btn_Right"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MainView;
