import React, { useState, useEffect } from "react";
import Editor from "../components/editor";
import Console from "../components/console";
import Visualization from "../components/Visualization";

export default function () {
  return (
    <section
      style={{
        height: "-webkit-fill-available",
        width: "100%",
        display: "flex",
        backgroundColor: "#C7ECEE",
      }}
    >
      <section style={{ flex: 7, padding: 20 }}>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          JogaScript
        </h1>
        <p style={{ fontSize: "1.5rem", paddingTop: 10 }}>
          Uma maneira simples e intuitiva de aprender <b>JavaScript</b>.
        </p>
        <Visualization />
      </section>
      <section
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Editor />
        <Console lines={["teste"]} />
      </section>
    </section>
  );
}
