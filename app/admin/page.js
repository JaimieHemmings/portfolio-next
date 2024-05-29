'use client';

import { useState, useEffect } from 'react';
import { signIn, getProviders, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

export default function AdminPage() {
  const { data: session } = useSession();
  console.log(session);

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
      {!session && <h1 className="text-4xl text-white pt-20">Sign In</h1>}
      <div className="block mt-20">
        {!session && (
          <div className="flex items-center">
            {providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className="flex items-center rounded-md px-3 py-2 btn-main"
                >
                  <FaGoogle className="text-white mr-2" />
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        )}
        {session && (
          <div className="block text-white text-center w-1/2 mx-auto">
            <Link className="block btn-main mt-20" href="/admin/addpost">
              Add Post
            </Link>
            <button
              onClick={() => {
                signOut({ callbackUrl: '/', redirect: true });
              }}
              href="#"
              className="btn-main block mt-10 w-full"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
