"use client";

import { CldImage } from "next-cloudinary";

export default function CloudImage({ src, width, height, alt, ...rest }) {
  return (
    <CldImage src={src} width={width} height={height} alt={alt} {...rest} />
  );
}
