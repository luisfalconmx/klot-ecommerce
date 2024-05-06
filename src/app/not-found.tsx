import Link from "next/link";
import Image from "next/image";
import LensIllustration from "@/assets/images/lens-illustration.svg";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center mx-6 mt-24">
      <Image
        src={LensIllustration}
        alt=""
        width={100}
        height={100}
        className="mb-7"
      />
      <p className="text-2xl font-bold mb-7 text-center">Not Found</p>

      <p className="text-lg mb-7 text-center">
        Sorry, we couldn&apos;t find the page you are looking for.
      </p>

      <Link
        href="/"
        className="bg-primary text-white py-4 px-6 rounded-full cursor-pointer"
      >
        Go to Home
      </Link>
    </section>
  );
}
