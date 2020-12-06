import { useEffect } from "react";
import axios from "axios";
import LoginPage from "../components/views/LoginPage/LoginPage";
import HomePage from "../components/views/HomePage/HomePage";
import { useState } from "react";

export default function (SpecificComponent, option, adminRoute = null) {
  const [verify, setVerify] = useState(false);

  //back에 req날리기
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("http://localhost:5000/api/users/auth", {
        withCredentials: true,
      });
      if (res.data.success) {
        await setVerify(true);
      } else {
        await setVerify(false);
      }
    }
    fetchData();
  }, []);
  //option =null, option=true, option=false
  //로그인, 로그인x
  if (option == null) {
    return SpecificComponent;
  } else if (option) {
    return verify ? SpecificComponent : LoginPage;
  } else {
    return verify ? HomePage : SpecificComponent;
  }
}
