"use client";

import SpanishStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Timeago from "react-timeago";



function LiveTimestamp({ time }) {
    const formatter = buildFormatter(SpanishStrings)
    return <Timeago date={time} formatter={formatter} />;
}

export default LiveTimestamp;