import Image from 'next/image';
import Link from 'next/link';

import connectDB from '@/config/database';
import portfolioposts from '@/models/PortfolioItem';

export default async function DisplayPost({ params }) {
  await connectDB();
  const postData = await portfolioposts.find(params).lean();
  const data = JSON.stringify(postData);
  return (
    <>
      <section className="container mx-auto p-5 pt-20">
        <Image
          className="w-full rounded"
          alt=""
          src={data.images[0]}
          width={0}
          height={0}
        />
      </section>
      <section className="container mx-auto pt-20 p-5 ">
        <span className="text-gold">{data.type}</span>
        <h1 className="text-white mt-5 mb-5 line-left text-4xl">
          {data.title}
        </h1>
        <p className="text-white pb-5">{data.paragraph1}</p>
        <p className="text-white pb-5">{data.paragraph2}</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 container mx-auto p-5">
        <div className="p-5">
          <Image
            className="rounded mx-auto"
            alt=""
            src={data.images[1]}
            width={0}
            height={0}
          />
        </div>
        <div>
          <p className="text-white pb-5">{data.paragraph3}</p>
          <p className="text-white pb-5">{data.paragraph4}</p>
        </div>
      </section>
      <section className="mx-auto container p-5 pb-10">
        <Link href={data.link} className="text-center btn-main link-full-w">
          View Site
        </Link>
      </section>
    </>
  );
}
