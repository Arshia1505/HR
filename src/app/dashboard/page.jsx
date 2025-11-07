'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    // always send to user dashboard
    router.replace('/user/dashboard');
  }, [router]);

  return <p className="text-center mt-10">Redirecting to dashboard...</p>;
}
