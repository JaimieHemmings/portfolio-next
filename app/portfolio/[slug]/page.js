'use client';
import { useParams } from 'next/navigation';
import connectDB from '@/config/database';
import portfolioposts from '@/models/PortfolioItem';

const PortfolioPost = async () => {
  const params = useParams();
  await connectDB();
  const postData = await portfolioposts.find(params).lean();
  const data = JSON.stringify(postData);
  console.log(data);

  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.type}</p>
      <p>{data.paragraph1}</p>
      <p>{data.paragraph2}</p>
      <p>{data.paragraph3}</p>
      <p>{data.paragraph4}</p>
    </section>
  );
};

export default PortfolioPost;
