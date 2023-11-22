import { makeStyles } from "@material-ui/core";
import Chart from "chart.js/auto";
import React from "react";

const useStyles = makeStyles((theme) => ({
  selectbutton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
  },
}));

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();
  return (
    <span
      className={classes.selectbutton}
      onClick={onClick}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
