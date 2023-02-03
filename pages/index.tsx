import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <h1 className="text-pink-700 text-6xl">Hello</h1>
    </div>
  );
}
