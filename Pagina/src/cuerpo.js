import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
}));

const PedirCamara = () => {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.getUserMedia(
    {
      video: true,
    },
    (stream) => {
      let video = document.getElementsByClassName("app__videoFeed")[0];
      if (video) {
        video.srcObject = stream;
      }
    },
    (err) => console.error(err)
  );
};

export default function Scuerpo() {
  const classes = useStyles();
  const pedirCam = PedirCamara();
  return (
    <div className={classes.root}>
      <Paper>
        <h1>Alex Rene Lopez Rosa</h1>
        <h1>201602999</h1>
      </Paper>
      <video
        height={500}
        width={500}
        muted
        autoPlay
        className="app__videoFeed"
      ></video>
    </div>
  );
}
