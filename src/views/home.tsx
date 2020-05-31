import React, { useState, useEffect } from "react";
import Editor from "../components/Editor";
import Console from "../components/Console";

export default function () {
    return <section style={{
        height: "100%",
        width: "100%", display: "flex",
        backgroundColor: "#C7ECEE"
    }}>
        <section style={{ flex: 6, padding: 20 }}>
            <h1 style={{
                fontSize: "2rem"
            }}>JogaScript</h1>
            <p style={{ fontSize: "1.5rem", paddingTop: 10 }}>
                Uma maneira simples e intuitiva de aprender <b>JavaScript</b>.
            </p>
        </section>
        <section style={{
            flex: 4,
            display: "flex",
            flexDirection: "column"
        }}>
            <Editor />
            <Console lines={["teste"]} />
        </section>
    </section>
}