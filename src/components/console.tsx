import React from "react";
import styled from "styled-components";

const Console = styled.pre`
    background-color: #2d2d2d;
    height: 100%;
    min-width: max-content;
    min-height: max-content;
    width: 100%;
    color: white;
    font-size: medium ; 
    font-family: "Consolas,Monaco,Lucida Console, Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace";
    width: 100%;
    display: inline-block;
    padding: 20px;
`
export default function ({ lines }: { lines: string[] }) {
    return <Console>{lines.map(l => <p>{l}</p>)}</Console>
}