'use client';

import SubmitPortfolioItemButton from './SubmitPortfolioItemButton';
import addPost from '@/app/actions/addPost';

export default function AddPostForm() {
  const handleImageChange = (e) => {
    if (e.target.files.length > 2) {
      e.target.value = '';
      toast.error('You can select up to 2 images in total.');
    }
  };

  return (
    <form action={addPost}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-white font-bold mb-2">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Create a title for the post"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type" className="block text-white font-bold mb-2">
          Post Type
        </label>
        <select
          id="type"
          name="type"
          className="border rounded w-full py-2 px-3"
          required
        >
          <option value="Personal">Personal</option>
          <option value="Freelance">Freelance</option>
          <option value="Hobby">Hobby</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="paragraph1" className="block text-white font-bold mb-2">
          Paragraph 1
        </label>
        <textarea
          id="paragraph1"
          name="paragraph1"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add the first paragraph to be displayed"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="paragraph2" className="block text-white font-bold mb-2">
          Paragraph 2
        </label>
        <textarea
          id="paragraph2"
          name="paragraph2"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add the second paragraph to be displayed"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="paragraph3" className="block text-white font-bold mb-2">
          paragraph 3
        </label>
        <textarea
          id="paragraph3"
          name="paragraph3"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add the first paragraph to be displayed"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="paragraph4" className="block text-white font-bold mb-2">
          Paragraph 4
        </label>
        <textarea
          id="paragraph4"
          name="paragraph4"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add the first paragraph to be displayed"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="block text-white font-bold mb-2">
          Link to Project
        </label>
        <input
          type="text"
          id="link"
          name="link"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Link to the project"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-white font-bold mb-2">
          Images (Select up to 2 images)
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3 text-white"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          required
        />
      </div>
      <div>
        <SubmitPortfolioItemButton />
      </div>
    </form>
  );
}
