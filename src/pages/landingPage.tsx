import React from "react";
import ExampleEvent from "../components/event";

const LandingPage = (): React.JSX.Element => {
  return (
    <div className="bg-slate-200">
      <ExampleEvent />
    </div>
  );
};

export default LandingPage;



// import React from "react";
// import { IUser } from "../interface/user";
// import dummyUser from "../mocks/user.json";
// import CardUser from "../components/cardUser";
// import ExampleRef from "../components/useRef";

// const LandingPage = (): React.JSX.Element => {
//   const [users, setUsers] = React.useState<IUser[]>(dummyUser);
//   const textRef = React.useRef(null)

//   const handleRef = () => {
//     textRef.current.style.backgroundColor = "red"
//   }

//   return (
//     <div className="bg-slate-200">
//       <div className="flex">
//         {users.map((data: IUser) => (
//           <CardUser
//             key={data.id}
//             id={data.id}
//             name={data.name}
//             image={data.image}
//           />
//         ))}
//       </div>

//       <div className='my-8'>
//         <p ref={textRef}>Change background color</p>
//         <button
//           className='bg-green-600 px-6 py-1 rounded text-white'
//           onClick={handleRef}
//         >
//           Change
//         </button>
//       </div>

//       <ExampleRef />
//     </div>
//   );
// };

// export default LandingPage;

// import React from 'react'

// interface transactions {
//   id: number;
//   title: string;
//   price: number;
// }

// const LandingPage = () : React.JSX.Element => {
//   const [transactions, setIsTranscations] = React.useState<transactions[]>([
//     {
//       id: 1,
//       title: "Makan",
//       price: 599000
//     }
//   ])

//   return (
//     <div>
//       {transactions ? (<p>ini list transactions</p>) : (<p>Masukan transaksi anda ...</p>)}
//     </div>
//   )
// }

// export default LandingPage
