import React from "react";

const TextArea = ({ value, onChange, placeholder, cols, title, rows }) => (
  <div className="w-full">
    <h2 className="mb-2 ml-2 text-olive">{title}</h2>
    <textarea
      cols={cols}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-xl bg-gialloPa ring-2 ring-olive w-full h-[100px] py-2 px-4 text-slate-900 outline-none mb-2"
    ></textarea>
  </div>
);

export default TextArea;



/*  // Il corrispettivo in componente react o html
        <textarea
            cols="30"
            rows="10"
            value={message}
            placeholder="Scrivi un messaggio"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 bg-red-100 border-4 border-red-900 rounded-lg text-slate-200"
        ></textarea>
*/