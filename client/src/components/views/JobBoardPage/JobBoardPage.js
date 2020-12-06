import React from "react";

import JobOfferTable from "../Sections/JobOfferTable/JobOfferTable.js";

import "./JobBoardPage.css";
import { Pagination } from "antd";

function JobBoardPage() {
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

  // paging 처리
  const onHandlePage = (page) => {};

  return (
    <section className="job-board">
      <div className="header-and-button">
        <h2 id="recuriting-page-header">구인게시판</h2>
      </div>
      <JobOfferTable data={RecruitData} />
      <br />
      <Pagination
        defaultCurrent={1}
        total={RecruitData.length}
        onChange={onHandlePage}
      />
    </section>
  );
}

export default JobBoardPage;
