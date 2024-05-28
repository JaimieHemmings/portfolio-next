import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact p-5">
      <h2 className="text-4xl text-white text-center stroke-behind">
        Contact Me
      </h2>
      <div className="container mx-auto pt-20 pb-10 p-5">
        <div className="contact-items">
          <a href="mailto:jaimie.j.hemmings@gmail.com" className="rounded">
            <FaEnvelope /> jaimie.j.hemmings@gmail.com
          </a>
          <a href="" className="rounded">
            <FaMapMarkerAlt /> Cornwall UK
          </a>
          <a href="tel:07818655375" className="rounded">
            <FaPhoneAlt /> 07818 655 375
          </a>
        </div>
      </div>
    </section>
  );
}
