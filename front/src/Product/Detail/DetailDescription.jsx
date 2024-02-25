import React from "react";
import sanitizeHtml from "sanitize-html";

const htmlCode =
  '<div class="cu-video">\n<div class="cu-video-aspect-ratio"><iframe src="https://www.youtube.com/embed/J9c2UCbOXR4"></iframe></div>\n</div>\n\n<p><img src="https://st.kakaocdn.net/product/gift/editor/20220620083501_55cab91b4d3d45d682860aaf991add9d.jpg"/> <img src="https://st.kakaocdn.net/product/gift/editor/20210904173638_571afce919984719aae6e8f6b535c947.jpg"/></p>';

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
