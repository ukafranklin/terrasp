import DotImage from "./DotImage";
import Feature from "./Feature";

export default function FlexCard({
  image,
  title,
  description,
  cta,
  href,
  bg,
  reverse,
  id,
  list,
}) {
  const ReversedCard = () => {
    return (
      <div
        className={`bg-[${bg}] ${
          id === 3 && "peach-color"
        } relative isolate flex flex-wrap lg:gap-[50px] pb-[200px] lg:pb-[300px] px-[37px] md:px-[50px] lg:px-[170px] pt-[0px]`}
      >
        <Feature
          title={title}
          description={description}
          cta={cta}
          href={href}
          bg={bg}
          list={list}
        />
        <DotImage
          image={image}
          radius="rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] "
        />
        <div
          className={`hidden lg:block absolute z-[-1] top-[-220px] left-0 w-full `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="505"
            preserveAspectRatio="none"
            viewBox="0 0 1440 505"
            fill="none"
          >
            <path
              d="M237 33.7845L0 188.907V505H1442V211.362L353 2.45082C291.5 -6.8734 279 11.8863 237 33.7845Z"
              fill={bg}
            />
          </svg>
        </div>
        <div
          className={` lg:hidden absolute z-[-1] top-[-120px] left-0 w-full `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="135"
            preserveAspectRatio="none"
            viewBox="0 0 430 135"
            fill="none"
          >
            <path d="M447.5 105.5L-12 0V121L447.5 134.084V105.5Z" fill={bg} />
          </svg>
        </div>
      </div>
    );
  };
  const UnreversedCard = () => {
    return (
      <div
        className={`bg-[${bg}] ${
          id === 3 && "peach-color"
        }  relative isolate  flex flex-wrap lg:gap-[50px] pb-[200px] lg:pb-[300px] px-[37px] md:px-[50px] lg:px-[170px]`}
      >
        <DotImage
          image={image}
          radius="rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] "
        />
        <Feature
          title={title}
          description={description}
          cta={cta}
          href={href}
          bg={bg}
          list={list}
        />
        <div
          className={`hidden lg:block absolute z-[-1] top-[-220px] left-0 w-full `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="505"
            preserveAspectRatio="none"
            viewBox="0 0 1440 505"
            fill="none"
          >
            <path
              d="M237 33.7845L0 188.907V505H1442V211.362L353 2.45082C291.5 -6.8734 279 11.8863 237 33.7845Z"
              fill={bg}
            />
          </svg>
        </div>
        <div
          className={` lg:hidden absolute z-[-1] top-[-120px] left-0 w-full `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="135"
            preserveAspectRatio="none"
            viewBox="0 0 430 135"
            fill="none"
          >
            <path d="M447.5 105.5L-12 0V121L447.5 134.084V105.5Z" fill={bg} />
          </svg>
        </div>
      </div>
    );
  };
  return <div>{reverse ? ReversedCard() : UnreversedCard()}</div>;
}
