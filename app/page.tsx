'use client'

import useBackgroundImage from "./hooks/useBackgroundImage";

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
