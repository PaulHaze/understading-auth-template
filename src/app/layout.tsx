import '@/styles/main.scss';

import type { Metadata } from 'next';

// !CHANGETHIS
export const metadata: Metadata = {
  title: 'Understanding Auth Template',
  description:
    'A starter repo which will serve as a base for various auth implementations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
