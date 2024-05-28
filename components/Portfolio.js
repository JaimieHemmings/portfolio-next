import connectDB from '@/config/database';
import Image from 'next/image';
import Link from 'next/link';

export default async function Portfolio() {
  await connectDB();

  return (
    <section className="portfolio container mx-auto pt-10 pb-10 p-5">
      <h2 className="text-center text-white text-4xl pb-10">Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-10">
        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>

        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>
        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>
        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>
        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>
        <Link href="#" className="relative">
          <Image
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="Image"
          />
          <div className="overlay">
            <h3 className="text-2xl">Title</h3>
            <p>A brief summary</p>
            <p className="fake-link">See More</p>
          </div>
        </Link>
      </div>
      <Link href="/portfolio" className="text-center btn-main link-full-w">
        View More
      </Link>
    </section>
  );
}
