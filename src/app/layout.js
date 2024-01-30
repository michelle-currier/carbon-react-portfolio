import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Michelle Currier Portfolio',
  description: 'IBM Carbon Portfolio with Carbon + NextJS 13 + using Vercel.app to deploy from Github',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
