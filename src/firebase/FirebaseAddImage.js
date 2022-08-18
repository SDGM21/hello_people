import { storage } from "./firebaseApp";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";

const FirebaseAddImage = async ({ nickName, imageToUpload }) => {
  const [url, setUrl] = useState(null);

  try {
    const imageRef = ref(storage, `NickImages/${nickName}`);
    await uploadBytes(imageRef, imageToUpload);
    const res = await getDownloadURL(imageRef);
    setUrl(res);
  } catch (err) {
    console.error(err);
  }

  return url;
};

export default FirebaseAddImage;
