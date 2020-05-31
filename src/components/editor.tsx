import React, { useState, useEffect } from "react";

import styled from "styled-components";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = styled(AceEditor)`
    background-color: #353b48; 
    color: white;
    min-width: max-content;
    min-height: max-content;
    -webkit-appearance: none;
    font-size: 1.5rem;
    height: auto !important;
    width: 100% !important;
    padding: 20px;
    flex: 1;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; /*remove the resize handle on the bottom right*/

    .ace_gutter {
        background-color: #272727;
    }
`

export default function (props: any) {
    return <Editor mode="javascript" theme="monokai" fontSize={20}>

    </Editor>
}