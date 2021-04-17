import React,{useState} from "react";
import { Select, MenuItem } from "@material-ui/core";

const DefaultSelect = () => {
  const [select, setSelect] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

  return (
    <Select
      value={select}
      id="exampleformControlSelect"
      className="custom-dropdown"
      onChange={handleChange}
    >
      <MenuItem value="Option 1">Option 1</MenuItem>
      <MenuItem value="Option 2">Option 2</MenuItem>
      <MenuItem value="Option 3">Option 3</MenuItem>
    </Select>
  );
};

export default DefaultSelect;
