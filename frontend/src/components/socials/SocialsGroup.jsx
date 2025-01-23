import { cn, Link, Image } from "@heroui/react";

// eslint-disable-next-line react/prop-types
const SocialsGroup = ({ className, title, icon, link }) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full items-center gap-2 rounded-lg bg-transparent px-4 text-sm font-bold dark:border-default dark:bg-transparent 2xl:text-base",
          className
        )}
      >
        <div className="relative z-10 inline-flex items-center text-white justify-center rounded-full bg-transparent border-1 dark:border-default dark:bg-transparent p-2">
          <Image
            width={16}
            height={16}
            src={`https://cdn.simpleicons.org/${icon}/000000/ec4899`}
            alt={`${name} logo`}
          />
        </div>
        <Link
          isBlock
          isExternal
          showAnchorIcon
          href={link}
          size="sm"
          color="danger"
          className="text-pink-500 dark:text-white"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default SocialsGroup;
