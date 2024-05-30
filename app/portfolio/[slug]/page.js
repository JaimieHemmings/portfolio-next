import connectDB from '@/config/database';
import portfolioposts from '@/models/PortfolioItem';
import convertToSerializeableObject from '@/utils/ConvertToObject';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const PortfolioPost = async ({ params }) => {
  await connectDB();
  const postData = await portfolioposts.find(params).lean();
  const data = convertToSerializeableObject(postData);
  return (
    <section className="container mx-auto p-5 pt-20">
      <Image
        className="w-full rounded pb-20"
        width={1000}
        height={600}
        src={data[0].images[0]}
      />
      <p>
        <span className="text-gold">{data[0].type}</span>
      </p>
      <h1 className="text-4xl text-white line-left mt-5 mb-5">
        {data[0].title}
      </h1>
      <p className="text-white pb-5">{data[0].paragraph1}</p>
      <p className="text-white pb-5">{data[0].paragraph2}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 container mx-auto p-5">
        <div className="p-5">
          <Image
            className="w-full rounded pb-20"
            width={500}
            height={1000}
            src={data[0].images[1]}
          />
        </div>
        <div className="p-5">
          <p className="text-white pb-5">{data[0].paragraph3}</p>
          <p className="text-white">{data[0].paragraph4}</p>
        </div>
      </div>
      <div className="w-full pb-10">
        {data[0].link && (
          <a
            href={data[0].link}
            rel="noopener noreferrer"
            className="text-center btn-main link-full-w"
          >
            View Project
          </a>
        )}
      </div>
    </section>
  );
};

export default PortfolioPost;
