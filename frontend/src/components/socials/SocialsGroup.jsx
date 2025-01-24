import { cn, Link, Image } from "@heroui/react";
import { Linkedin } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const SocialsGroup = ({ className, title, icon, link }) => {
  return (
    <>
      <div
        className={cn(
          "flex h-full items-center gap-2 rounded-lg bg-transparent text-sm font-bold dark:border-default dark:bg-transparent 2xl:text-base",
          className
        )}
      >
        <div className="z-10 items-center text-white justify-center rounded-full bg-transparent dark:bg-transparent">
          {icon ? <Image
            width={15}
            height={16}
            src={`https://cdn.simpleicons.org/${icon}/000000/ec4899`}
            alt={`${name} logo`}
          /> : <div className="text-darkCard dark:text-pink-500"><Linkedin size={16} strokeWidth={1.75} /></div>}
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
