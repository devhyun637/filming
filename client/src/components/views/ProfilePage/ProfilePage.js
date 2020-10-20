import React from "react";

import Profile from "./Sections/Profile";
import Article from "./Sections/Article";
import Comments from "./Sections/Comment";

function ProfilePage() {
  return (
    <main>
      <section>
        <Profile />
        <Comments />
      </section>

      <section>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </section>

      <button>수정하기</button>
    </main>
  );
}

export default ProfilePage;
