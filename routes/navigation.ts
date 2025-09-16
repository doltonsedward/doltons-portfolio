'use client';

import { useRouter as useNextRouter } from '@bprogress/next';

export const useRouter = () => {
  const router = useNextRouter();

  return router;
};
