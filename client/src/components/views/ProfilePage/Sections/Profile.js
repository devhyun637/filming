import React from "react";

function Profile() {
  return (
    <article>
      <figure>
        <img></img>
      </figure>
      <h1>이름</h1>
      <div>profile</div>
      <div>
        <ul>
          <li>좋아요</li>
          {/* 남이보는데 이게 왜 필요? */}
          <li>메일</li>
          <li>찜</li>
        </ul>
      </div>
    </article>
  );
}

export default Profile;
