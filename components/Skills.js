import Image from 'next/image';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoPython,
  IoLogoGithub,
  IoLogoReact,
  IoLogoNodejs,
} from 'react-icons/io5';

export default function Skills() {
  return (
    <section className="skills container mx-auto pt-10 pb-10">
      <h2 class="text-center font-display text-white text-4xl">My Skills</h2>
      <ul class="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoJavascript className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">Javascript</p>
        </li>
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoCss3 className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">CSS3</p>
        </li>
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoPython className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">Python</p>
        </li>
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoGithub className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">Version Control</p>
        </li>
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoReact className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">React</p>
        </li>
        <li class="rounded-xl bg-shaded px-6 py-8 text-white">
          <IoLogoNodejs className="skills-icon" size={100} />
          <p class="my-3 font-display font-medium">Node JS</p>
        </li>
      </ul>
      <div className="decorative-grid">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
