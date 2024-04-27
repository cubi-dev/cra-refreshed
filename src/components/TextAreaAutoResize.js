import React from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = React.useState("demo");
  const textareaRef = React.useRef(null);
  const [textAreaHeight, setTextAreaHeight] = React.useState("auto");
  const [parentHeight, setParentHeight] = React.useState("auto");

  const handleChange = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`)
    setText(event.target.value);
  };
  
  React.useEffect(() => {
    setTextAreaHeight(`${textareaRef?.current?.scrollHeight}px`)
  }, [text]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="w-full max-w-[400px] p-5 overflow-hidden transition-all rounded-lg border border-gray-300 focus-visible:border-blue-400 resize-none outline-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textAreaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
