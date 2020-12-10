import React from "react";
import image from "../computer.jpg";

export default function Home() {
    return (
       <main>
           <img src={image} alt="Andre Carrizales FrontEnd Developer" 
           className="absolute object-cover w-full h-full opacity-80" />
           <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-6">
               <h1 className="text-6x1 text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Welcome to My Site</h1>
           </section>
       </main>
    )
}