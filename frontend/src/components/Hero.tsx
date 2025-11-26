import hero from "../images/hero.png";

export const Hero = () => {
  return (
    <section className="container">
      <h1 className="text-center mb-4 text-5xl font-bold ">
        Master Web <span className="text-green-accent">Development</span>
      </h1>
      <h2 className="text-2xl text-center">
        Learn all of the most in demand skills in web development by building
        real projects and learning industry best practices.
      </h2>
      <div className="flex justify-center">
        <img className="h-150 " src={hero} alt="hero-images" />
      </div>
    </section>
  );
};
