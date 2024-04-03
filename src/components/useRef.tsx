import React, { FormEvent } from "react";

const ExampleRef = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputRef);
    if (inputRef.current) {
      alert("Ini adalah value penangkapan data" + inputRef.current.value);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black p-1 rounded me-4"
          type="text"
          placeholder="type message"
          ref={inputRef}
        />

        <button className="bg-green-600 px-6 py-1 rounded text-white">
          submit
        </button>
      </form>
    </div>
  );
};

export default ExampleRef;
