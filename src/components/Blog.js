import React from "react";
import useLinkNewTab from "../hooks/useLinkNewTab";
/**
Ví dụ: Chúng ta lấy được các text bên dưới từ DB chứ kp từ tay gõ ra 
nên chúng ta không thể tự custom bên trong thẻ <a> xong rồi cho thêm target="_blank" để new tab được 
bây h phải viết 1 cái hooks để giải quyết vấn đề này 
 */

const Blog = () => {
  const { contentRef } = useLinkNewTab();

  return (
    <div className="entry-content" ref={contentRef}>
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
