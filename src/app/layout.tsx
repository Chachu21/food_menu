import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yegna Foodies - Exquisite Dining Experience",
  description:
    "Discover our menu of culinary delights, from fresh salads to artisanal coffee. Experience the fusion of Ethiopian and international cuisines.",
  keywords:
    "Yegna Foodies, Ethiopian cuisine, dining experience, food menu, salads, coffee, international cuisine, gourmet food",
  authors: [{ name: "Yegna Foodies Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://food-menu-git-main-chachus-projects.vercel.app/",
    title: "Yegna Foodies - Exquisite Dining Experience",
    description:
      "Discover our menu of culinary delights, from fresh salads to artisanal coffee. Experience the fusion of Ethiopian and international cuisines.",
    images: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YegnaFoodies",
    title: "Yegna Foodies - Exquisite Dining Experience",
    description:
      "Discover our menu of culinary delights, from fresh salads to artisanal coffee. Experience the fusion of Ethiopian and international cuisines.",
    images: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
