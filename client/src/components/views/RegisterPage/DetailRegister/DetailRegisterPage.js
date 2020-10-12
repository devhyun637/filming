import React from "react";
import HoverImage from "react-hover-image";
import { Link } from "react-router-dom";

import "./DetailPage.css";
import personImg1 from "./img/person_register_unchecked.png";
import personImg2 from "./img/person_register_checked.png";
import companyImg1 from "./img/company_register_unchecked.png";
import companyImg2 from "./img/company_register_checked.png";

function DetailRegisterPage() {
  return (
    <section id="detail_register_page">
      <h1>안녕하세요, 회원정보를 등록해주세요!</h1>
      <ul>
        <li>
          <Link to="/personRegister">
            <div id="person_user" className="select_detail">
              <HoverImage src={personImg1} hoverSrc={personImg2} />
              <h2>개인회원</h2>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/compRegister">
            <div className="select_detail">
              <HoverImage src={companyImg1} hoverSrc={companyImg2} />
              <h2>기업회원</h2>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default DetailRegisterPage;
