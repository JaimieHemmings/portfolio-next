'use client';
import { useParams } from 'next/navigation';

export default function urlParams() {
  const params = useParams();
  return params;
}
