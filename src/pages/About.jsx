import coverImage from "../assets/wtlk-cover1.png";

function About() {
  return (
    <div className="bg-black text-white">
      <div
        className="h-[300px] md:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <section className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold font-sans text-[#FFFFFF] mb-4">
          About Us
        </h1>
        <p className="text-lg mb-4">
          We are a group of riders who share a passion for BMX. We ride, we soar
          high on ramps, we crash, we laugh, and we learn. Riding BMX is not
          just a hobby, but a way for us to have fun and express ourselves.
        </p>
        <div className="flex justify-between mb-4">
          <blockquote className="text-lg italic border-l-4 border-[#5BAA5B] pl-4 w-1/2 mr-4">
            "Laro lang walang inom."
            <br />
            <span className="text-sm">- Notled</span>
          </blockquote>
          <blockquote className="text-lg italic border-l-4 border-[#5BAA5B] pl-4 w-1/2">
            "San kayo? Sino sino kayo?"
            <br />
            <span className="text-sm">- Jong Suh Park</span>
          </blockquote>
        </div>
        <p className="text-lg mb-4">
          Our group name is WetLook BMX Clothing, and we're all about the thrill
          of the ride and the joy of the community. We're a team of riders who
          support and encourage each other to push our limits and try new
          things.
        </p>
      </section>
    </div>
  );
}

export default About;
