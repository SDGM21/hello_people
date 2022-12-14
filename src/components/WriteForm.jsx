// import { collection, addDoc } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { db, storage } from "../firebase/firebaseApp";
import { useState } from "react";
import { addWriter } from "../back4app/service_Init";

const WriteForm = () => {
  const [values, setValues] = useState({
    nickName: null,
    message: null,
    imageToUpload: null,
  });

  const handleClick = () => {
    if (values.nickName && values.message && values.imageToUpload) {
      // try {
      //   const imageRef = ref(storage, `NickImages/${values.nickName}`);
      //   await uploadBytes(imageRef, values.imageToUpload);
      //   await addDoc(collection(db, "writers"), {
      //     NickName: values.nickName,
      //     Message: values.message,
      //     NickImage: await getDownloadURL(imageRef),
      //   });
      // } catch (e) {
      //   alert("Error adding document: ", e);
      // }
      addWriter({
        dataBaseRef: "Writers",
        nickName: values.nickName,
        message: values.message,
        nickImage: values.imageToUpload,
      });
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <label>
        NickName:
        <input
          onChange={handleChange}
          type="text"
          name="nickName"
          id="nickName"
        />
      </label>
      <label>
        Message:
        <textarea onChange={handleChange} name="message" id="message" />
      </label>
      <label>
        Picture UrSelf
        <input
          onChange={(e) => {
            setValues({ ...values, imageToUpload: e.target.files[0] });
          }}
          type="file"
          name="imageToUpload"
          id="imageToUpload"
          accept="image/*"
        />
      </label>
      <button onClick={handleClick} className="bg-green-500">
        Launch
      </button>
    </div>
  );
};

export default WriteForm;
