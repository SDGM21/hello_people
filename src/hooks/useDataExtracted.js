import { useState } from "react";
import { db } from "../firebase/firebaseApp";
import { getDocs, collection } from "firebase/firestore";

const useDataExtracted = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const docRef = collection(db, "writers");
      return (await getDocs(docRef));
    } catch (error) {
      return error;
    }
  };

  getData().then((element) => {
    setData(element.docs);
  });

  return data;
};

export default useDataExtracted;
