import React, { useState } from "react";
import { Checkbox } from "antd";

function CheckBox2(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxList = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          style={{ margin: "5px" }}
          onChange={() => {
            handleToggle(value._id);
          }}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span style={{ marginRight: "40px" }}>{value.name}</span>
      </React.Fragment>
    ));

  return <div>{renderCheckboxList()}</div>;
}

export default CheckBox2;
