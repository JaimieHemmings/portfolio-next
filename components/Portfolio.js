import connectDB from '@/config/database';
import Image from 'next/image';
import Link from 'next/link';
import portfolioposts from '@/models/PortfolioItem';

export default async function Portfolio() {
  await connectDB();
  const recentposts = await portfolioposts
    .find({})
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  return (
    <section className="portfolio container mx-auto pt-10 pb-10 p-5">
      <h2 className="text-center text-white text-4xl pb-10">Portfolio</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-10">
        {recentposts.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          recentposts.map((post) => (
            <Link href="#" className="relative" key={post._id}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={post.images[0]}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt="Image"
              />
              <div className="overlay">
                <h3 className="text-2xl">{post.title}</h3>
                <p>{post.paragraph1.substring(0, 30)}...</p>
                <Link href={`/portfolio/${post.slug}`} className="fake-link">
                  See More
                </Link>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
