import React from "react";

const LoadingPage = () => {
  return (
    <div
      style={{
        minHeight: "93.4vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#343a40",
        alignItems: "center",
        color: "white",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      }}
    >
      <img
        style={{
          maxHeight: "20vh",
          marginTop: "25vh",
          marginBottom: "5vh",
          flex: "1",
        }}
        src="../../../assets/LogoWhiteTrans.png"
        alt="Atomos Logo"
      />
      <h5 style={{ flex: "1" }}>
        Please trigger state change to render component tree.
      </h5>
    </div>
  );
};

export default LoadingPage;
