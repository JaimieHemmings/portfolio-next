import Hero from '@/components/Hero';
import img1 from '@/assets/images/nova-landing.png';
import Image from 'next/image';
import Link from 'next/link';
import connectDB from '@/config/database';
import portfolioposts from '@/models/PortfolioItem';
import PortfolioPosts from '@/components/PortfolioPosts';

export default async function PortfolioPage() {
  await connectDB();
  const portfoliopostsdata = await portfolioposts.find({}).limit(6);
  return (
    <>
      <Hero
        title="Welcome to my"
        titlesubtext="Portfolio"
        text="Welcome to my web development portfolio! I pride myself on my passion and skills in creating dynamic and responsive websites. With a keen eye for detail and a commitment to delivering exceptional user experiences."
        button="Contact Me"
      />
      <section className="portfolio container mx-auto pt-20">
        <h2 className="text-4xl text-white text-center pb-20">Portfolio</h2>

        <PortfolioPosts data={portfoliopostsdata} />
      </section>
      <section className="antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-white text-center">Other Skills</h2>
            <p className="mt-4 text-gold">
              Not all skills that make a developer great are about technical
              ability
            </p>
          </div>

          <div className="container mx-auto p-5 grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Telepathic Communication with Houseplants
              </h3>
              <p className="text-lg text-white">
                I can hold riveting conversations with my fern. It has
                surprisingly strong opinions about sunlight and humidity.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Whispering to WiFi Routers
              </h3>
              <p className="text-lg text-white">
                I can calm a temperamental WiFi router with soothing words and
                make it reconnect without a single reboot.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                Expert Cloud Shaper
              </h3>
              <p className="text-lg text-white">
                I can reshape clouds into any form I desire. My specialty is
                transforming cumulus clouds into highly detailed origami Swans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
