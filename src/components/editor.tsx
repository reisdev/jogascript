import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Editor = styled.textarea`
    background-color: #353b48; 
    height: 100%;
    color: white;
    min-width: max-content;
    min-height: max-content;
    -webkit-appearance: none;
    font-size: 1.5rem;
    width: 100%;
    padding: 20px;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; /*remove the resize handle on the bottom right*/
`

export default function (props: any) {
    return <Editor>

    </Editor>
}