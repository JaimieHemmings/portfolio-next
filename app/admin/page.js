'use client';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

export default function AdminPage() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);
  return (
    <section className="container mx-auto pt-20">
      <h1 className="text-4xl text-white pt-20">Sign In</h1>
      <div className="md:block md:ml-6">
        <div className="flex items-center">
          {providers &&
            Object.values(providers).map((provider, index) => (
              <button
                onClick={() => signIn(provider.id)}
                key={index}
                className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >
                <FaGoogle className="text-white mr-2" />
                <span>Login or Register</span>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
