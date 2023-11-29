import BlogCard from "@/components/blog/BlogCard";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import RichTextComponents from "@/components/blog/RichTextComponents";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Head from "next/head";
import { sanityClient, urlFor } from "../../../../sanity";
export const revalidate = 3600;

export async function generateStaticParams() {
  const query = groq`*[_type == 'post']
   {
      slug
   }
   `;

  const slugs = await sanityClient.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => {
    return slug;
  });
}
export async function generateMetadata({ params }, parent) {
  try {
    const slug = params.slug;
    const query = groq`
   *[_type=='post' && slug.current == '${slug}'][0]
   `;
    const post = await sanityClient.fetch(query, { slug: slug });

    return {
      title: post.title,
      description: post.description,
      image: urlFor(post.mainImage),
    };
  } catch (error) {
    return {
      title: "Blog Post",
      description: "",
    };
  }
}

export default async function page({ params: { slug } }) {
  const query = groq`
   *[_type=='post' && slug.current == '${slug}'][0]{
    ...,
    categories[]->

   }
   `;

  const post = await sanityClient.fetch(query, { slug: slug });

  const [categoryRef] =
    (post && post?.categories?.map((category) => category._id)) || [];
  const categoryQuery = groq`*[ _type=="post" && references('${categoryRef}')]{
    ...,
    categories[]->

   }`;
  const morePosts = await sanityClient.fetch(categoryQuery);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>

      <div className=" lg:pt-[150px] pt-[120px] ">
        <BlogPostHeader
          title={post.title}
          category={post?.categories?.map((category) => category.title)}
          date={new Date(post._createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          image={urlFor(post.mainImage).url()}
        />

        <div className="relative px-[37px] lg:px-[90px] mt-[70px] lg:pb-[93px]">
          <p className=" mb-3 text-lg font-cairo capitalize text-darkPurple font-medium break-words first-letter:font-bold first-letter:text-[96px]">
            {post.description}
          </p>
          <PortableText value={post.body} components={RichTextComponents} />
          {morePosts?.length > 1 && (
            <div className=" lg:mt-[93px]">
              <h2 className=" font-barlow text-[40px] font-bold mb-9 text-darkPurple lg:mb-[70px]">
                More Stories
              </h2>
              {morePosts
                ?.filter((data) => data.title !== post.title)
                .map((blog) => (
                  <BlogCard
                    key={blog.id}
                    title={blog.title}
                    date={new Date(blog._createdAt).toLocaleDateString(
                      "en-Us",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                    link={blog.slug.current}
                    image={urlFor(blog.mainImage).url()}
                    category={blog?.categories?.map(
                      (category) => category.title
                    )}
                    description={blog.description}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
