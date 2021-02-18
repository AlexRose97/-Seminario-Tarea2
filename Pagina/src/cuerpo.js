import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: '100vh',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
}));

export default function Scuerpo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <h1>Alex Rene Lopez Rosa</h1>
        <h1>201602999</h1> 
      </Paper>
    </div>
  );
}
