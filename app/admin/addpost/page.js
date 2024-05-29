import AddPostForm from '@/components/PostAddForm';

export const metadata = {
  title: 'Jaimie Hemmings | Create New Post',
  description: 'Create a new portfolio item to be displayed on the website',
};

export default async function addPostPage() {
  return (
    <section className="container mx-auto pt-20">
      <h1 className="text-4xl text-white text-center pt-20">ADD NEW POST</h1>
      <AddPostForm />
    </section>
  );
}
