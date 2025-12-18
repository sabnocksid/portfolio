// "use client";

// import React from "react";
// import { BsDot } from "react-icons/bs"; 

// const words = [
//   "Performant",
//   "Efficient",
//   "Reliable",
//   "Secure",
//   "Scalable",
//   "Maintainable",
//   "Testable",
//   "Modular",
//   "Documented",
//   "Collaborative",
// ];

// const Tape = () => {
//   return (
//     <div className="overflow-x-clip pb-32 pt-16 lg:py-24">
//       <div className="-mx-1 -rotate-3 bg-gradient-to-r from-orange-300 to-sky-400">
//         <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left">
//             {[...new Array(2)].fill(0).map((_, index) => (
//               <React.Fragment key={index}>
//                 {words.map((word, wordIndex) => (
//                   <div
//                     key={wordIndex}
//                     className="inline-flex items-center gap-4"
//                   >
//                     <span className="text-sm font-extrabold uppercase text-gray-900">
//                       {word}
//                     </span>
//                     <BsDot className="text-gray-900 text-xl -rotate-12" />
//                   </div>
//                 ))}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes move-left {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-move-left {
//           animation: move-left linear infinite 30s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Tape;
