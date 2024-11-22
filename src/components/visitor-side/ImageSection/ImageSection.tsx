import React from "react";

export default function ImageSection({ imageLink }: { imageLink: string }) {
  return (
    <section
      style={{ backgroundImage: `url(${imageLink})` }}
      className="h-[50vw] w-full bg-center bg-cover "
    ></section>
  );
}
