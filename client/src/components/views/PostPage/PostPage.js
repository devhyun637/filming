import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Title from "./Sections/Title";
import Discription from "./Sections/Discription";
import Table from "./Sections/Table";

const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`;

const RecruitingInfo = styled.section`
  width: 60vw;
`;

const H = styled.h2`
  margin: 0 0.5rem 1rem 0.5rem;
`;

const Button = styled.button`
  margin: 3rem auto;
  background-color: #6092cd;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 50vh;
`;

const AuthorButton = styled.button`
  margin: 3rem auto;
  margin-right: 1rem;
  background-color: #6092cd;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  width: 20vh;
`;

function PostPage(props) {
  // user 관련
  const [userState, serUserState] = useState(2);

  // post 관련
  const [postId, setPostId] = useState(props.location.pathname.split("/")[2]);
  const [postDate, setPostDate] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postUserName, setPostUserName] = useState("");
  const [postCompanyName, setPostCompanyName] = useState("");
  const [filmName, setFilmName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [postUserAddress, setPostUserAddress] = useState("");
  const [field, setField] = useState("");
  const [period, setPeriod] = useState("");
  const [pay, setPay] = useState("");
  const [manager, setManager] = useState("");
  const [postDeadline, setPostDeadline] = useState("");
  const [postDiscipt, setPostDiscipt] = useState("");
  const [recruitState, setRecruitState] = useState(1);

  useEffect(() => {
    const postData = props.location;
    if (postData.state) {
      const postInfo = postData.state;
      setPostId(postInfo.id);
      setPostDate(postInfo.date);
      setPostTitle(postInfo.title);
      setPostUserName(postInfo.userName);
      setPostCompanyName(postInfo.companyName);
      setFilmName(postInfo.filmName);
      setCompanyAddress(postInfo.companyAddress);
      setPostUserAddress(postInfo.userAddress);
      setField(postInfo.field);
      setPeriod(postInfo.period);
      setPay(postInfo.pay);
      setManager(postInfo.manager);
      setPostDeadline(postInfo.deadline);
      setPostDiscipt(postInfo.discipt);

      // 0이면 모집 마감, 1이면 모집중
      if (postInfo.tag === "마감") {
        setRecruitState(0);
      }
    }

    // TODO : state가 null이라면 -> board를 통해서 들어온 것이 아니라 직접 url을 입력해서 들어온 거라면 postid로 post정보 서버에서 가져오기
    // axios.get().then((response) => {
    // const postInfo = response......

    // setPostId();
    // setPostDate();
    // setPostTitle();
    // setPostUserName();
    // setPostCompanyName();
    // setFilmName();
    // setCompanyAddress();
    // setPostUserAddress();
    // setField();
    // setPeriod();
    // setPay();
    // setManager();
    // setPostDeadline();
    // setPostDiscipt();
    // });

    // TODO : user의 상태 알아내기
    //  if (지원을 한 경우) {
    //     setUserState(1);
    //  }

    //  if (게시글을 쓴 경우) {
    //      setUserState(2);
    //   }
  }, []);

  // TODO : 지원 취소 기능 추가하기
  const onRecruitingCancelHandler = () => {};
  // TODO : 삭제기능 추가하기
  const onPostDeletelHandler = () => {};
  // TODO : 글 마감 기능 추가하기
  const onRecruitingFinishHandler = (e) => {
    setRecruitState(0);
    alert("마감되었습니다");
  };

  const getUserState = () => {
    // 지원을 하지 않은 경우
    if (userState === 0) {
      return (
        <Link to="/">
          <Button className="recruit">지원하기</Button>
        </Link>
      );
    }
    // 지원을 한 경우
    if (userState === 1) {
      return (
        <Button className="cancle-recruit" onSubmit={onRecruitingCancelHandler}>
          지원취소하기
        </Button>
      );
    }
    // 게시글을 쓴 기업인 경우
    if (userState === 2) {
      return (
        <section>
          <Link to="/">
            <AuthorButton className="cancle-recruit">수정하기</AuthorButton>
          </Link>

          <Link to="/job-board">
            <AuthorButton
              className="cancle-recruit"
              onSubmit={onPostDeletelHandler}
            >
              삭제하기
            </AuthorButton>
          </Link>

          <AuthorButton
            className="cancle-recruit"
            onClick={onRecruitingFinishHandler}
          >
            마감하기
          </AuthorButton>
        </section>
      );
    }
  };

  return (
    <Main>
      <RecruitingInfo>
        <H>구인/구직</H>
        <Title title={postTitle} userName={postUserName} date={postDate} />
        <Table
          companyName={postCompanyName}
          filmName={filmName}
          companyAddress={companyAddress}
          userAddress={postUserAddress}
          field={field}
          period={period}
          pay={pay}
          manager={manager}
          deadline={postDeadline}
        />
        <Discription desc={postDiscipt} />
      </RecruitingInfo>

      {recruitState === 0 ? (
        <Link to="/job-board">
          <Button className="go-to-board">목록으로</Button>
        </Link>
      ) : (
        getUserState()
      )}
    </Main>
  );
}

export default PostPage;
