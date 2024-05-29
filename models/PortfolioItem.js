import { Schema, model, models } from 'mongoose';

const ItemPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  paragraph1: {
    type: String,
    required: true,
  },
  paragraph2: {
    type: String,
    required: true,
  },
  paragraph3: {
    type: String,
    required: true,
  },
  paragraph4: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});
const portfolioposts =
  models.portfolioposts || model('portfolioposts', ItemPostSchema);

export default portfolioposts;
