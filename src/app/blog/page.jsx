import BlogSection from "@/components/blog/BlogSection";
import HeroSection from "@/components/blog/HeroSection";
import GetStarted from "@/components/home/GetStarted";
import { sanityClient } from "../../../sanity";
export const metadata = {
  title: "Terass Bloig",
  description: "bla bla bvla",
};

export default async function page() {
  const querys = `*[_type == "post"]{
     ...,
     categories[]->
      } | order(_createdAt desc) `;
  const posts = await sanityClient.fetch(querys);
  console.log(posts);

  return (
    <>
      <HeroSection />
      <BlogSection blogs={posts} />

      <GetStarted />
    </>
  );
}