import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import Scuerpo from "./cuerpo";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/fond.jpeg'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CssBaseline />
      <Scuerpo/>
    </div>
  );
}

export default App;
