"use client";
import { useState } from "react";
import axios from "axios";
import Home from "./home/home";
 
export default function HomePage() {
  // const [test, setTest] = useState();

  // const getTest = async () => {
  //   const response = await axios.get(
  //     "https://figure-forge-shop-app.azurewebsites.net/client"
  //   );
  //   setTest(await response.data);
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
      <h1></h1>
      {/* <button onClick={getTest}>test 1</button>
      {test && <h1>{test}</h1>} */}
    </main>
  );
}
