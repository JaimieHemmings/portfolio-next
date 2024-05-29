import PortfolioPostsCard from '@/components/PortfolioPostsCard';

const PortfolioPosts = ({ data }) => {
  return (
    <>
      {data.map((post) => (
        <PortfolioPostsCard key={post._id} data={post} />
      ))}
    </>
  );
};

export default PortfolioPosts;
