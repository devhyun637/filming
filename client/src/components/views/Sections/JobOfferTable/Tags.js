import React from "react";
import { Tag } from "antd";

export default function Tags(props) {
  const COLOR = {
    New: "#ffba02",
    구인중: "#609ae9",
    마감: "#ced0da",
  };

  const tagName = props.name;
  return (
    <Tag
      color={COLOR[tagName]}
      style={{ color: "white", fontWeight: "400", fontSize: "0.85rem" }}
    >
      {tagName}
    </Tag>
  );
}
