import React from "react";

interface ILogin {
  email: string;
  password: string;
}

const ExampleEvent = () => {
  const [form, setForm] = React.useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Ini adalah value penangkapan data" + form.email);
    // integration to api POST
  };

  console.log(form);

  return (
    <div className="flex justify-center mt-5">
      <form  onSubmit={handleSubmit}>
        <input
          className="border border-black p-1 rounded me-4"
          type="text"
          placeholder="type email"
          onChange={handleChange}
          name="email"
        />

        <input
          className="border border-black p-1 rounded me-4"
          type="text"
          placeholder="type password"
          onChange={handleChange}
          name="password"
        />

        <button className="bg-green-600 px-6 py-1 rounded text-white">
          submit
        </button>
      </form>
    </div>
  );
};

export default ExampleEvent;





// CATEGORY 
// 1 : income
// 2 : outcome


// POST 
// {
//   description: "salary"
//   price: 59000000,
//   userId: 1,
//   categoryId: 1
// }


// SELECT * FROM transaction where catergory = 1
// [
//   {
//     description: "salary"
//     price: 59000000,
//     userId: 1,
//     categoryId: 1
//   },
//   {
//     description: "salary"
//     price: 59000000,
//     userId: 1,
//     categoryId: 1
//   },
//   {
//     description: "salary"
//     price: 59000000,
//     userId: 1,
//     categoryId: 1
//   }
// ]

// SUM ALL PRICE 

JSON