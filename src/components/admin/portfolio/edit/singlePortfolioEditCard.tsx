"use client";
import Image from "next/image";
import Link from "next/link";

export default function SinglePortfolioEditCard({
  id,
  heading,
  fileNamesStr,
}: {
  id: string;
  heading: string;
  fileNamesStr: string;
}) {
  const imagesArr = fileNamesStr === "" ? [] : JSON.parse(fileNamesStr);

  return (
    <div
      className={
        "flex flex-col md:flex-row justify-between px-10 py-5 border-b"
      }
    >
      <div className={"flex justify-between grow items-center pr-20"}>
        <h3 className="gray-subheader mb-4">{heading}</h3>

        <div className="flex h-[50px] w-auto">
          {imagesArr.map((image: { name: string; id: string }) => {
            return (
              <Image
                key={image.name}
                height={50}
                width={50}
                alt=""
                src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_PROTOCOL}://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK}/images/${image.name}`}
              ></Image>
            );
          })}
        </div>
      </div>

      <div className={`mt-8 md:mt-0 flex flex-col justify-center`}>
        <Link
          className="link-button link-button-blue mb-2"
          href={`/admin/portfolio/edit/${id}`}
        >
          Редактировать
        </Link>

        <Link
          className="link-button link-button-red"
          href={`/admin/portfolio/delete/${id}`}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
}
