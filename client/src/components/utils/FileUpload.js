import React from "react";
// import ImageUploader from "react-images-upload";
// import { Upload, message, Button } from "antd";

function FileUpload(props) {
  // const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  // const [imgFile, setImgFile] = useState(null); //파일

  // const handleChangeFile = event => {
  //   let reader = new FileReader();

  //   reader.onloadend = () => {
  //     // 2. 읽기가 완료되면 아래코드가 실행됩니다.
  //     const base64 = reader.result;
  //     if (base64) {
  //       setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
  //     }
  //   };
  //   if (event.target.files[0]) {
  //     reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
  //     setImgFile(event.target.files[0]); // 파일 상태 업데이트
  //   }
  // };

  return (
    <div
      style={{
        // border: "1px solid blue",
        width: "80%",
        height: "200px",
        position: "relative"
      }}
      className="ImageUpload"
    >
      <div
        style={{
          backgroundColor: "#efefef",
          width: "150px",
          height: "200px",
          display: "inline-block"
          // border: "1px solid red"
        }}
      ></div>
    </div>
  );
}

export default FileUpload;
