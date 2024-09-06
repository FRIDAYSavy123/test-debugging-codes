import React from 'react'
// import { Inter } from 'next/font/google'
// import Cards , {Card2} from "..//pages/Cards"
import Link from 'next/link'

// export default function hello() {
//   return (
//     <div> 
//       <h1>Hello next js </h1>
//     </div>
//   )
// }

//  function hello() {
//   return (
//     <div>
//       <h1>No , i dont ever give up </h1>

//       <Card2/> 
// <Cards/>

//     </div>
//   )
// }

// export default hello

export default function Home() {
   return ( 
       <div> 
        <h1>Learn how to link different pages to home pages</h1> 
        <link href={"http://localhost:3000/privacypolicy"} >AboutUs</link>
       </div>
   )
}



