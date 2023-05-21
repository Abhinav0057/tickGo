import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    // console.log(value);
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="w-100 p-1">
      <input
        className="form-control form-control-solid px-5  w-25 text-center"
        value={value || ""}
        onChange={(e) => {
          // console.log(e.target.value);
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search records...`}
        style={{
          fontSize: "1.1rem",
          margin: "0rem 0",
        }}
      />
    </span>
  );
};
