import React from "react";
import dynamic from "next/dynamic";

import 'react-chat-widget/lib/styles.css';


const ChatWidget = dynamic(() => import("react-chat-widget").then((mod) => mod.Widget), {
  /* code omitted for clarity, see the source file for details */
  ssr: false,
});
export default ChatWidget;