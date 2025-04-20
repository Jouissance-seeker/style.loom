'use client';

import NextTopLoader from 'nextjs-toploader';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Providers(props: IProps) {
  return (
    <>
      <NextTopLoader color="#ae9b84" height={4} showSpinner={false} />
      <Suspense>{props.children}</Suspense>
    </>
  );
}
