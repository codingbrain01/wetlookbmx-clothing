import coverImage from "../assets/wtlk-cover.png";

function Home() {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold font-sans text-[#DCDCDC] drop-shadow-[0_0_15px_black] drop-shadow-[0_0_30px_white] relative z-10 text-center">
        WetLook BMX Clothing
      </h1>
    </div>
  );
}

export default Home;
