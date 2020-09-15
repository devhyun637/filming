import React from "react";
import "./HomePage.css";

import JobOfferTable from "../Sections/JobOfferTable/JobOfferTable.js";

function HomePage() {
  return (
    <div id="home_page">
      <section id="job_offer">
        <h2>구인게시판</h2>
        <JobOfferTable />
      </section>

      <section id="profile">
        <h2>프로필</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
