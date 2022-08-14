import { useState } from "react";
import { db } from "../firebase/firebaseApp";
import { getDocs, collection } from "firebase/firestore";

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
      yieldData(querySnapshot);
    } catch (error) {
      alert(error);
    }
  };

  const yieldData = (querySnapshot = []) => {
    console.log(querySnapshot.docs)
    setPostData({
      nickName: querySnapshot.docs[counter].data().NickName,
      nickImage: querySnapshot.docs[counter].data().NickImage,
      message: querySnapshot.docs[counter].data().Message,
    });

    if (counter + 1 === querySnapshot.docs.length) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <button onClick={getData} className="bg-blue-600 w-2 h-2">
        HOLA
      </button>
      <div className="border p-2 mx-auto">
        <img className="block" src={postData.nickImage} alt="" />
      </div>
      <div className="border p-2">
        <h3>{postData.nickName}</h3>
        <p>{postData.message}</p>
      </div>
    </div>
  );
};

export default MainView;
