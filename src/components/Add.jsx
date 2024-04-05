import React, { useState, useEffect, createContext, useReducer } from "react";
const Add = () => {
  const [img, setImg] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const UrlImg = await converBase(file);
    setImg(UrlImg);
    console.log("vinhlinhtinh");
    console.log(UrlImg);
    console.log("file", file);
  };

  const converBase = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />

        <img src={img} height={"300px"} />
      </div>
    </>
  );
};

export default Add;
