import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-03-07",
  useCdn: true,
};
export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
