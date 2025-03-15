import Image from "next/image";
import { Carousel } from "./components/Carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/slider1.png"
              alt=""
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              7th St Burger
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Best smash burgers in NYC
            </p>
          </div>
        </section>

        <section id="about" className="py-20 bg-[#8B403C] clor-black">
          <div className="container mx-auto px-4  ">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/Slider3.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>

                <p className=" mb-4">
                  7th Street Burger is an American fast-food restaurant chain
                  specializing in smash burgers that primarily serves the New
                  York metropolitan area. Founded by American entrepreneurs
                  Kevin Rezvani and Paras Jain, its first location opened in
                  June 2021 on the namesake East 7th Street in East Village,
                  Manhattan, New York City.
                </p>
                <p className="mb-6">
                  As of January 2025, it has expanded to 19 locations mostly in
                  New York City, with one in Washington, D.C. and additional
                  planned locations in Philadelphia, Baltimore, and Boston.
                  According to Rezvani, the restaurant aims to be the In-N-Out
                  of the East Coast.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-[#8B403C] border-t-2">
          <div className="flex items-center justify-center flex-col container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Gallery
              </h2>
              <p className="max-w-2xl mx-auto">
                Take a visual journey through our restaurant and cuisine.
              </p>
            </div>

            <Carousel />
          </div>
        </section>
      </main>
    </div>
  );
}
