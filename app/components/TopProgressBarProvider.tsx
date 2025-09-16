'use client';

import { ProgressProvider } from '@bprogress/next/app';

const TopProgressBarProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ProgressProvider
      height="4px"
      color="#02978E"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default TopProgressBarProviders;
