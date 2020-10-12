import React, { useState } from "react";
import { Select, Form } from "antd";

import "../RegisterPage.css";

function CheckBox1(props) {
  const { Option } = Select;
  const [Checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currentIndex = value;
    const newChecked = [...currentIndex];

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckBoxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <Option key={`${index}`}>{value.name}</Option>
    ));

  return (
    <Form.Item
      name="select-multiple"
      rules={[
        {
          required: true,
          message: "관심분야를 선택해주세요",
          type: "array"
        },
        {
          max: 5,
          message: "최대 5개까지 선택 가능합니다.",
          type: "array"
        }
      ]}
    >
      <Select
        allowClear="true"
        mode="multiple"
        style={{ width: "100%" }}
        placeholder=" 관심분야를 선택해주세요"
        onChange={handleToggle}
      >
        {renderCheckBoxList()}
      </Select>
    </Form.Item>
  );
}

export default CheckBox1;
