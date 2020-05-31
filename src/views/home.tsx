import React, { useState, useEffect } from "react";
import Editor from "../components/editor";
import Console from "../components/console";

export default function () {
    return <section style={{
        height: "-webkit-fill-available",
        width: "100%", display: "flex",
        backgroundColor: "#C7ECEE"
    }}>
        <section style={{ flex: 7 }}>

        </section>
        <section style={{ flex: 3, display: "flex", flexDirection: "column" }}>
            <Editor />
            <Console lines={[]} />
        </section>
    </section>
}