import React from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
import useHover from "../hooks/useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem
        ipsa repellendus ab assumenda beatae! Optio, error suscipit. Eius eos
        officiis aliquid a cumque architecto iste voluptas veritatis labore
        nemo?
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-green-400" : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem
        ipsa repellendus ab assumenda beatae! Optio, error suscipit. Eius eos
        officiis aliquid a cumque architecto iste voluptas veritatis labore
        nemo?
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem
        ipsa repellendus ab assumenda beatae! Optio, error suscipit. Eius eos
        officiis aliquid a cumque architecto iste voluptas veritatis labore
        nemo?
        <a href="https://google.com" className="underline">
          google.com
        </a>
        ?
      </p>
    </div>
  );
};

export default Blog;
