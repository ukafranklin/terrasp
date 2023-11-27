import CloudImage from "../common/CloudImage";

export default function Gallery() {
  return (
    <div className="text-center px-[170px] pt-[69px] pb-[56px]">
      <h2 className=" text-darkPurple text-[50px] font-barlow font-bold mb-6">
        Gallery
      </h2>
      <p className=" max-w-[576px] w-full mx-auto font-cairo text-darkPurple text-lg font-medium">
        Terra in Pictures
      </p>

      <div className=" mt-6 grid gap-2 grid-cols-8 h-[480px] grid-rows-4">
        <div className=" col-span-2 row-span-3">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-2 row-span-2">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-start-1 row-start-4 col-span-2 row-span-1">
          <CloudImage
            className="w-full h-full object-cover"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-3 col-start-3 row-start-3 row-span-2">
          <CloudImage
            className="w-full h-full object-cover "
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-1 row-span-1">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
        <div className=" col-span-3 row-span-3">
          <CloudImage
            className="w-full h-full object-cover object-top"
            src="Terra/im1_4x_tav8rw"
            width={1884}
            height={1884}
          />
        </div>
      </div>
    </div>
  );
}
