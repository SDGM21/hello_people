import { useState, useEffect, useCallback } from "react";
import { db } from "../firebase/firebaseApp";
import { getDocs, collection } from "firebase/firestore";

const MainView = () => {
  const [counter, setCounter] = useState(0);
  const [requestData, setRequestData] = useState([]);

  const getData = useCallback(async () => {
    try {
      const docRef = collection(db, "writers");
      return (await getDocs(docRef)).docs;
    } catch (error) {
      return error;
    }
  }, []);

  const handleClick = (e) => {
    if (requestData !== undefined) {
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

  // getData().then((element) => {
  //   setRequestData(element);
  // });

  return (
    <div>
      <div className="border p-2 mx-auto">
        <img
          className="block"
          // src={requestData ? requestData[counter].data().NickImage : ""}
          alt=""
        />
      </div>
      <div className="border p-2">
        {/* <h3>{requestData ? requestData[counter].data().NickName : ""}</h3> */}
        {/* <p>{requestData ? requestData[counter].data().Message : ""}</p> */}
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
