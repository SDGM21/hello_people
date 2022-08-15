import { useState } from "react";
import { db } from "../firebase/firebaseApp";
import { getDocs, collection } from "firebase/firestore";
import { isLessOrMuch } from "../helpers/isLessOrMuch";

const MainView = () => {
  const [counter, setCounter] = useState(0);
  const [postData, setPostData] = useState({
    nickName: "",
    nickImage: "",
    message: "",
  });

  const getData = async () => {
    try {
      const docRef = collection(db, "writers");
      const querySnapshot = await getDocs(docRef);
      setPostData({
        nickName: querySnapshot.docs[counter].data().NickName,
        nickImage: querySnapshot.docs[counter].data().NickImage,
        message: querySnapshot.docs[counter].data().Message,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleClick = (e) => {
    switch (e.target.value) {
      case "left":
        setCounter(counter - 1);
        break;
      case "right":
        setCounter(counter + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="border p-2 mx-auto">
        <img className="block" src={postData.nickImage} alt="" />
      </div>
      <div className="border p-2">
        <h3>{postData.nickName}</h3>
        <p>{postData.message}</p>
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
