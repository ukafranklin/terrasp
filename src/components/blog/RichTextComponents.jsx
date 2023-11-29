import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity";

const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-[24rem] m-10 mx-auto">
          <Image
            className="object-contain"
            alt="Blog Post Image"
            src={urlFor(value).url()}
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-2 list-disc space-y-2 marker:text-darkPurple text-darkPurple capitalize">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-3 list-decimal marker:text-darkPurple text-darkPurple capitalize">
        {children}
      </ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl mt-2 text-darkPurple font-barlow font-bold break-words">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl mt-2  mb-2 text-darkPurple font-barlow  font-bold break-words">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl mt-2 text-darkPurple font-barlow font-bold break-words">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg mt-2  font-cairo capitalize text-darkPurple font-bold break-words">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className=" mb-3 text-lg font-cairo capitalize text-darkPurple font-medium break-words">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-lizard_green border-l-4 pl-5 my-5 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-yellow-500 hover:decoration-black text-lizard_green"
        >
          {children}
        </Link>
      );
    },
  },
};
export default RichTextComponents;
