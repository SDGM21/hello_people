import Parse from "parse";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "WSXJAKt55Df6DipklaHhEZN66nvpa7aVCNSFK6JB";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "LLiY1SVLuezh67Eykl5h3dovGIDfOvJi2Z7Zcv5x";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

async function addWriter({ dataBaseRef, nickName, message, nickImage }) {
  try {
    const newObject = new Parse.Object(dataBaseRef);
    const imgToSave = new Parse.File(nickName, nickImage);
    // define the attributes you want for your Object
    newObject.set("NickName", nickName);
    newObject.set("Message", message);
    newObject.set("NickImage", imgToSave);
    // save it on Back4App Data Store
    await newObject.save();
  } catch (error) {
    console.error("Error saving new Object: ", error);
  }
}

async function getWritersArray() {
  let reqQuery = new Parse.Query("Writers");
  try {
    return await reqQuery.find();
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { addWriter, getWritersArray };
