export default function Home() {
  return (
    <>
      <section className="md:flex  justify-center">
        <div className="home-information border">
          <h1 className="md:text-6xl sm:text-4xl home-title m-10">
            Home page.
          </h1>
          <span className="md:text-6xl sm:4xl m-10 home-title">humans</span>

          <p className="m-10 flex flex-nowrap md:w-[400px] sm:w-[200px] font-extralight">
            Customers and employees are more than interactions, 
            they're human.Give them faster, more personalized 
            experiences using AI trained in the art of customer service.
          </p>
        </div>

        <div>
          <img
            className="w-[500px] space-x-7"
            src="https://web-assets.zendesk.com/images/p-home/relate24-hero.webp"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
