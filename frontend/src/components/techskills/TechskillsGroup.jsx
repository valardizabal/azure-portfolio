import { cn, Image } from "@heroui/react";

// eslint-disable-next-line react/prop-types
const TechskillsGroup = ({ className, name, logo }) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full min-h-[2.5rem] items-center gap-2 rounded-lg border bg-stone-300 px-4 text-sm font-bold dark:border-default dark:bg-transparent 2xl:text-base",
          className
        )}
      >
        <Image
          width={16}
          height={16}
          src={`https://cdn.simpleicons.org/${logo}/000000/a855f7`}
          alt={`${name} logo`}
        />
        {name}
      </div>
    </>
  );
};

export default TechskillsGroup;
