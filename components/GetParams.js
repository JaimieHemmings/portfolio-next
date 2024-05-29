'use client';
import { useParams } from 'next/navigation';

const GetParams = () => {
  const params = useParams();
  console.log(params);
};

export default GetParams;
