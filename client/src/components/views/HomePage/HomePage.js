import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";
import JobOfferTable from "../Sections/JobOfferTable/JobOfferTable.js";

function HomePage() {
  const RecruitData = [
    {
      id: 1,
      tag: "New",
      title: "액션마스터 액션 스턴트팀1",
      date: "0000-00-00",
      userName: "김필름",
      companyName: "필**아카데미",
      filmName: "시월의 아침",
      companyAddress: "Http://*****************",
      userAddress: "asndkansdlkasn@naver.com",
      field: "배우",
      period: "2021년 1월 (5회차)",
      pay: "회차당 **만 원",
      manager: "피일름",
      deadline: "2020-10-12",
      discipt: `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College!!!!!!!!!!`,
    },
    {
      id: 2,
      tag: "구인중",
      title: "액션마스터 액션 스턴트팀1",
      date: "0000-00-00",
      userName: "김필름",
      companyName: "필**아카데미",
      filmName: "시월의 아침",
      companyAddress: "Http://*****************",
      userAddress: "asndkansdlkasn@naver.com",
      field: "배우",
      period: "2021년 1월 (5회차)",
      pay: "회차당 **만 원",
      manager: "피일름",
      deadline: "2020-10-12",
      discipt: `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College!!!!!!!!!!`,
    },
    {
      id: 3,
      tag: "마감",
      title: "액션마스터 액션 스턴트팀1",
      date: "0000-00-00",
      userName: "김필름",
      companyName: "필**아카데미",
      filmName: "시월의 아침",
      companyAddress: "Http://*****************",
      userAddress: "asndkansdlkasn@naver.com",
      field: "배우",
      period: "2021년 1월 (5회차)",
      pay: "회차당 **만 원",
      manager: "피일름",
      deadline: "2020-10-12",
      discipt: `Contrary to popular belief, Lorem Ipsum is not simply random text. \n It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College!!!!!!!!!!`,
    },
  ];

  return (
    <section id="home_page">
      <section className="board">
        <div className="header-and-button">
          <h2 id="recuriting-page-header">구인게시판</h2>
          <Link to="/job-board" className="nav-to-recuriting-page">
            더보기
          </Link>
        </div>
        <JobOfferTable data={RecruitData} />
      </section>
    </section>
  );
}

export default HomePage;
