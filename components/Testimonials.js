import reynholm from '@/assets/images/reynholm.png';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="testimonials container mx-auto text-white pb-20 p-5">
      <div className="decorative-spans">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 className="text-4xl text-white pt-20 text-center pb-10">
        Testimonial
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="testimonial-text">
          <p>
            Working with Jaimie was like finding the cheat code to the internet.
            Before Jaimie came along, our website looked like it was designed by
            a time traveler from the 90s who got lost in the GeoCities era. Now,
            it's a sleek, modern masterpiece that even my grandma can't stop
            raving about – and she still uses a flip phone!
          </p>
          <p>
            Jaimie is not just a web developer; he's a digital wizard who
            transforms code into pure magic. I swear, he must have a pet unicorn
            that helps him debug because every issue we threw at him was
            resolved faster than you can say '404 Error.' From the first
            meeting, Jaimie understood our vision perfectly, even when we
            explained it using elaborate hand gestures and stick-figure
            drawings.
          </p>
          <p className="font-bold text-2xl">Douglas Reynholm</p>
          <p className="line-left">CEO Reynholm Industries</p>
        </div>
        <div className="testimonials-picture">
          <Image
            src={reynholm}
            alt="Reynholm Industries CEO"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
