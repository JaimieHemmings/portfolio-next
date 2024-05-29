'use server';

import ConnectDB from '@/config/database';
import portfolioposts from '@/models/PortfolioItem';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import cloudinary from '@/config/cloudinary';

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}

async function addPost(formData) {
  await ConnectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const images = formData.getAll('images').filter((image) => image.name !== '');

  const slugTitle = slugify(formData.get('title'));

  const portfolioPostData = {
    title: formData.get('title'),
    type: formData.get('type'),
    paragraph1: formData.get('paragraph1'),
    paragraph2: formData.get('paragraph2'),
    paragraph3: formData.get('paragraph3'),
    paragraph4: formData.get('paragraph4'),
    link: formData.get('link'),
    slug: slugTitle,
    owner: userId,
  };

  const imageUrls = [];

  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    // Convert the image data to base64
    const imageBase64 = imageData.toString('base64');

    // Make request to upload to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: 'portfolio',
      }
    );

    imageUrls.push(result.secure_url);
  }

  portfolioPostData.images = imageUrls;

  const newPortfolioItem = new portfolioposts(portfolioPostData);
  await newPortfolioItem.save();

  revalidatePath('/', 'layout');
  redirect('/portfolio');
}

export default addPost;
