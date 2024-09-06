// const Cards = () => {
//     let message: string = "my first component" 
//     return ( 
//         <div> 
//             <h2 style={{color: "blue"}}> 
//                 {message}
//             </h2>
//         </div>
//     )
// }
// export default const Cards = () => {
//     let message : string = "my first component" 
//     return ( 
//         <div> 
//             <h2 style={{color: "red"}}> 
//                 {message}
//             </h2>
//         </div>
//     )
// }



// export const Card2 = () => {
//     let message : string = "hello nextjs i will master you in few days" 
//     return <div> 
//         <h4>
//             {message}
//         </h4>
//     </div>
// }

const Cards = () => {
    let message: string = "my first component";
    return (
      <div>
        <h2 style={{ color: "red" }}>
          {message}
        </h2>
      </div>
    );
  };
  
  export default Cards;
  
  // export const Card2 = () => {
  //   let message: string = "hello nextjs i will master you in few days";
  //   return (
  //     <div>
  //       <h4>{message}</h4>
  //     </div>
  //   );
  // };
export const Cards2 = () => {
  let message : string = "hello nextjs i will master you in fw days" 
  return ( 
    <div> 
      <h4>{message}</h4>
    </div>
  )
}