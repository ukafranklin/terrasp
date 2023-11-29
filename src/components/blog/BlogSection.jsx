"use client";

import { useEffect, useState } from "react";
import { urlFor } from "../../../sanity";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";

export default function BlogSection({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [allBlogs, setAllBlogs] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = allBlogs?.slice(indexOfFirstData, indexOfLastData);
  useEffect(() => {
    setAllBlogs(blogs);
  }, [blogs]);

  console.log(currentData);
  const handleBlog = () => {
    setDataPerPage((prev) => prev + 5);
  };
  return (
    <div className="lg:py-[188px] py-[80px]  md:px-[50px] px-[37px] lg:px-[170px]">
      {currentData?.map((post) => (
        <BlogCard
          key={post.id}
          description={post.description}
          link={post.slug.current}
          image={urlFor(post.mainImage).url()}
          title={post.title}
          date={new Date(post._createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
          category={post?.categories?.map((category) => category.title)}
        />
      ))}
      {currentData.length !== allBlogs.length && (
        <div className=" text-center">
          <Button
            onClick={handleBlog}
            className="  px-[51px] py-[19px] rounded-[10px] bg-darkPurple text-white text-[15px]"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
