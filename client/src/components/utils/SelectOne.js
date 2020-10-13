import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

function SelectOne(props) {
  const handleToggle = value => {
    props.handleAddress(value);
  };

  const renderSelectList = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Option value={value._id}>{value.name}</Option>
      </React.Fragment>
    ));

  return (
    <Form.Item
      name={props.itemName}
      rules={[{ required: true, message: "주소 선택은 필수입니다." }]}
    >
      <Select
        showSearch
        placeholder="선택"
        optionFilterProp="children"
        onChange={handleToggle}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {renderSelectList()}
      </Select>
    </Form.Item>
  );
}

export default SelectOne;
