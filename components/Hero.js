import Image from 'next/image';
import profilecrop from '@/assets/images/profile-crop.png';

export default function Hero({ title, titlesubtext, text, button }) {
  return (
    <section className="hero spacer mb-20">
      <div className=" container mx-auto">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
          <Image
            className="home-img"
            src={profilecrop}
            alt="Image of Jaimie"
            width={0}
            height={0}
          />
          <div className="w-1/2">
            <h1 className="block text-white text-4xl pb-5">
              {title}{' '}
              <span className="title-span text-7xl">{titlesubtext}</span>
            </h1>
            <p className="text-lg text-white pb-10">{text}</p>
            <a className="btn-main" href="/contact">
              {button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
