import Image from 'next/image';
import img1 from '@/assets/images/nova-landing.png';
import img2 from '@/assets/images/nova-mobile.png';
import Link from 'next/link';

export default function PortfolioPost() {
  return (
    <>
      <section className="container mx-auto p-5 pt-20">
        <Image
          className="w-full rounded"
          alt=""
          src={img1}
          width={0}
          height={0}
        />
      </section>
      <section className="container mx-auto pt-20 p-5 ">
        <span className="text-gold">Web Development</span>
        <h1 className="text-white mt-5 mb-5 line-left text-4xl">Post Title</h1>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
          purus, efficitur vel ante nec, dictum maximus lacus. Quisque et lacus
          tellus. Cras pulvinar, nunc ac bibendum pharetra, sem quam dapibus
          augue, ullamcorper finibus nunc nisi imperdiet enim. Etiam pretium vel
          quam vitae eleifend. Mauris sit amet magna ut lectus eleifend aliquam.
          Cras vel nisi semper, sagittis urna vel, porttitor lorem. Vivamus
          consequat eros lectus.
        </p>
        <p className="text-white pb-5">
          Mauris sit amet sapien non lacus mattis aliquam. Sed viverra eget
          libero congue tincidunt. Proin mattis arcu justo, sed rhoncus diam
          porta nec. Donec sed massa fringilla, posuere sem sed, consectetur
          quam. Curabitur in luctus massa, eget sollicitudin lectus. Nullam
          aliquam diam lacus, sit amet congue diam dignissim sit amet.
          Vestibulum rutrum ultrices ullamcorper. Donec fermentum rhoncus elit,
          ac aliquet nisi faucibus eu. Donec cursus nunc massa, vel euismod
          felis egestas sed. Nullam rhoncus finibus eleifend. Cras pharetra
          turpis vitae arcu rutrum, vitae lacinia ante egestas. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus volutpat bibendum risus, quis tincidunt orci
          fermentum eget.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 container mx-auto p-5">
        <div className="p-5">
          <Image
            className="rounded mx-auto"
            alt=""
            src={img2}
            width={0}
            height={0}
          />
        </div>
        <div>
          <p className="text-white pb-5">
            Mauris sit amet sapien non lacus mattis aliquam. Sed viverra eget
            libero congue tincidunt. Proin mattis arcu justo, sed rhoncus diam
            porta nec. Donec sed massa fringilla, posuere sem sed, consectetur
            quam. Curabitur in luctus massa, eget sollicitudin lectus. Nullam
            aliquam diam lacus, sit amet congue diam dignissim sit amet.
            Vestibulum rutrum ultrices ullamcorper. Donec fermentum rhoncus
            elit, ac aliquet nisi faucibus eu. Donec cursus nunc massa, vel
            euismod felis egestas sed. Nullam rhoncus finibus eleifend. Cras
            pharetra turpis vitae arcu rutrum, vitae lacinia ante egestas. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vivamus volutpat bibendum risus, quis tincidunt
            orci fermentum eget.
          </p>
          <p className="text-white pb-5">
            Mauris sit amet sapien non lacus mattis aliquam. Sed viverra eget
            libero congue tincidunt. Proin mattis arcu justo, sed rhoncus diam
            porta nec. Donec sed massa fringilla, posuere sem sed, consectetur
            quam. Curabitur in luctus massa, eget sollicitudin lectus. Nullam
            aliquam diam lacus, sit amet congue diam dignissim sit amet.
            Vestibulum rutrum ultrices ullamcorper. Donec fermentum rhoncus
            elit, ac aliquet nisi faucibus eu. Donec cursus nunc massa, vel
            euismod felis egestas sed. Nullam rhoncus finibus eleifend. Cras
            pharetra turpis vitae arcu rutrum, vitae lacinia ante egestas. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vivamus volutpat bibendum risus, quis tincidunt
            orci fermentum eget.
          </p>
        </div>
      </section>
      <section className="mx-auto container p-5 pb-10">
        <Link href="/portfolio" className="text-center btn-main link-full-w">
          View Site
        </Link>
      </section>
    </>
  );
}
