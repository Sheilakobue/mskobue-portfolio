import Image from "next/image";
import ParticlesBackground from "./ParticlesBackround";
import { FaGithub, FaDev,FaFacebook,FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
  return (
    <header id="home" className="relative h-fit py-10">
        <ParticlesBackground/>
<div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
<div className="flex flex-col justify-center text-blue-300 flex-1 max-md:order-2 max-md:text-center">
<h2 className="font-bold md:text-4xl text-3xl mb-2">Hi am Sheila Kobue a Full Stack</h2>
<h1 className="xl:text-6xl lg:text-8xl md:text-7xl text-6xl text-yellow-300 mb-5">Developer</h1>
<span className="md:w-3/4 mb-5">
A passionate software engineer with a background in civil engineering and over nine years of experience in office administration. As the founder and CEO of MMS Dynamic Services (Pty) Ltd, I am dedicated to leveraging technology to empower businesses and communities. My journey blends technical expertise with a commitment to innovation and community upliftment. Welcome to my portfolio, where you can explore my work, projects, and vision for a more connected and inclusive future. Find out what i can do for you..{""}

<Link href={"#contact"}>
<span className="text-yellow-300 underline text-sm">
Contact Me &#8594;
</span>
</Link>
</span>
<div className="flex gap-5 text-blue-700 text-2xl max-md: justify-center">
<FaGithub/>
<FaDev/>
<FaFacebook/>
<FaLinkedin/>
</div>
</div>
<div className="flex flex-1 justify-end max-md:order-1 max-md:mb-3">
<Image
src={"/header-image.jpg"}
width={450}
height={450}
role="img"
arial-label="Sheila's Image"
alt="Sheila's Image"
className="md:justify-self-end max-md:w-96"
/>
</div>
</div>
    </header>
  )
}
