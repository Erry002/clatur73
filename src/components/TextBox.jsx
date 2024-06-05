import React from "react";

const TextBox = ({ value, onChange, placeholder, title, stile }) => (
  <div className="w-full ">
    <h2 className="mb-2 ml-2 text-olive">{title}</h2>
    <input
      //Da sistemare la parte di required per il TextBox 
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-xl bg-gialloPa ring-2 ring-olive w-full h-[40px] pl-4 text-slate-900 outline-none mb-2"
    />
  </div>
);

export default TextBox;


/* 
    // Il corrispettivo in react o html
    <input
        type="text"
        placeholder="Inserisci il tuo nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 border-4 border-blue-900 rounded-lg bg-blue-950 text-slate-100"
    />
*/