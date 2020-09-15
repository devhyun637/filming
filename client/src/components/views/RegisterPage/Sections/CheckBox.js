import React, { useState } from "react";
import { Select } from "antd";

import "../RegisterPage.css";

function CheckBox(props) {
  const { Option } = Select;

  const [Checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currenIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currenIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currenIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  //value.name을 넘기는 방식으로 해야할듯 -> key값이 입력되면 그 key값의 이름이 선택됨
  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <Option key={`${value}+${index}`}>{value.name}</Option>
    ));

  const handleChange = value => {};

  return (
    <div>
      <Select
        allowClear="true"
        mode="multiple"
        style={{ width: "100%" }}
        placeholder=" 관심분야를 선택해주세요 (카테고리 직접 추가 가능)"
        onChange={handleChange}
      >
        {renderCheckBoxList()}
      </Select>
    </div>
  );
}

export default CheckBox;
