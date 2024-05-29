import Image from 'next/image';
import Link from 'next/link';
const PortfolioPostsCard = ({ data }) => {
  return (
    <div className="hero-content grid grid-cols-1 sm:grid-cols-2 w-full bg-shaded p-5 rounded mb-10 portfolio-list-item">
      <div className="p-5">
        <h1 className="text-4xl text-white font-bold">{data.title}</h1>
        <p className="py-6 text-white">{data.paragraph1}</p>
        <Link href={`/portfolio/${data.slug}`} className="btn btn-main">
          View Post
        </Link>
      </div>
      <Image
        className="max-w-sm rounded shadow-2xl w-full mx-auto"
        src={data.images[0]}
        width={300}
        height={300}
      />
    </div>
  );
};

export default PortfolioPostsCard;
