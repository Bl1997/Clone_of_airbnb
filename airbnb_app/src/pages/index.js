import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Bottomnav from "./components/Bottomnav";

import Landingpage from "./components/Landingpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Bottomnav/>
  <Landingpage/>

     
    </main>
  );
}
