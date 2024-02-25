import React from "react";
import sanitizeHtml from "sanitize-html";

const htmlCode = "ㅁㄴㅇㄹ";

const cleanCode = sanitizeHtml(htmlCode, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "iframe",
    "video",
  ]), // 'iframe', 'video' 태그 추가
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ["src", "alt", "data-animated", "data-origin-url"],
    iframe: [
      "src",
      "width",
      "height",
      "frameborder",
      "allowfullscreen",
      "allow",
    ], // 'iframe' 태그에 대해 허용할 속성들 추가
    video: ["src", "width", "height", "controls", "autoplay", "loop", "muted"], // 'video' 태그에 대해 허용할 속성들 추가
  },
});

export default function test() {
  return <div dangerouslySetInnerHTML={{ __html: cleanCode }}></div>;
}
