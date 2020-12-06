import React from "react";
import { Link } from "react-router-dom";

import "./JobOfferTable.css";
import styled from "styled-components";

import Tags from "./Tags";

const TableBody = styled.tbody``;
const TableBodyRow = styled.tr`
  font-size: 1rem;
  font-weight: 100;
`;
const TableBodyData = styled.td`
  padding-left: 1rem;
`;

function JobOfferTable(props) {
  const tableData = props.data;

  return (
    <section id="job_offer">
      <table>
        <thead className="table-head">
          <tr>
            <th>분류</th>
            <th>모집</th>
            <th>날짜</th>
          </tr>
        </thead>

        <TableBody className="table-body">
          {tableData.map((value) => (
            <TableBodyRow key={value.id}>
              <TableBodyData className="post-classification">
                <Tags name={value.tag} />
              </TableBodyData>
              <TableBodyData className="post-title">
                <Link
                  to={{
                    pathname: `/job-recurit/${value.id}`,
                    state: {
                      id: `${value.id}`,
                      tag: `${value.tag}`,
                      title: `${value.title}`,
                      date: `${value.date}`,
                      userName: `${value.userName}`,
                      companyName: `${value.companyName}`,
                      filmName: `${value.filmName}`,
                      companyAddress: `${value.companyAddress}`,
                      userAddress: `${value.userAddress}`,
                      field: `${value.filmName}`,
                      period: `${value.period}`,
                      pay: `${value.pay}`,
                      manager: `${value.manager}`,
                      deadline: `${value.deadline}`,
                      discipt: `${value.discipt}`,
                    },
                  }}
                >
                  {value.title}
                </Link>
              </TableBodyData>
              <TableBodyData className="post-written-date">
                {value.date}
              </TableBodyData>
            </TableBodyRow>
          ))}
        </TableBody>
      </table>
    </section>
  );
}

export default JobOfferTable;
