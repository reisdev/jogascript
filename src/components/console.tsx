import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Console = styled.section`
    background-color: #2d2d2d;
    height: 100%;
    min-width: max-content;
    min-height: max-content;
    width: 100%;
`

export default function ({ lines }: { lines: string[] }) {
    return <Console>
    </Console>
}