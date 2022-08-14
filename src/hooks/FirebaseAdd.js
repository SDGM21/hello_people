import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebaseApp";
import FirebaseAddImage from "./FirebaseAddImage";

const FirebaseAdd = ({ nickName, message, imageToUpload }) => {
  const [imageUrl, setImageUrl] = useState(null);
  try {
    FirebaseAddImage({
      nickName: nickName,
      imageToUpload: imageToUpload,
    }).then((url) => {
      setImageUrl(url);
    });

    addDoc(collection(db, "writers"), {
      NickName: nickName,
      Message: message,
      NickImage: imageUrl,
    });
  } catch (e) {
    alert("Error adding document: ", e);
  }
};

export default FirebaseAdd;
