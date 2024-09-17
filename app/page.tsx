'use client'
import Navbar from "./home/navbar";
import Ad from "./home/ad";
import Services from "./home/services";
import useBackgroundImage from "./hooks/useBackgroundImage";
import Testimonials from "./home/testimonials";
import { messages } from "./lib/localdatabase";
import Checkpin from "./applicationprocess/checkpin/page";
import Start from "./applicationprocess/start/page";

export default function Home() {

  const {bgstyle} = useBackgroundImage('/images/bg.jpg', 'cover');
  return (
    <div className="w-full h-full" style={bgstyle}>
      {/* <Ad />
      <Navbar />
      <Services />
      <Testimonials user={messages} />
      <Services /> */}

      {/* <Checkpin /> */}
      <Start />
    </div>
  );
}
