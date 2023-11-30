import BlogSection from "@/components/blog/BlogSection";
import HeroSection from "@/components/blog/HeroSection";
import GetStarted from "@/components/home/GetStarted";
import { sanityClient } from "../../../sanity";
export const metadata = {
  title: "Terra Blogs",
};

export default async function page() {
  const querys = `*[_type == "post"]{
     ...,
     categories[]->
      } | order(_createdAt desc) `;
  const posts = await sanityClient.fetch(querys);

  return (
    <>
      <HeroSection />
      <BlogSection blogs={posts} />

      <GetStarted />
    </>
  );
}
