// import React from 'react'
import { Card, Chip } from "@heroui/react";

import { Star } from "lucide-react";

import useFunctions from "../hooks/useFunctions";
import useTime from "../hooks/useTime";
import ThemeSwitcher from "../components/context/ThemeSwitcher.jsx";

const Header = () => {
  const { useGetCount } = useFunctions();
  const { data, isLoading } = useGetCount();
  const time = useTime();

  return (
    <Card className="relative flex flex-row items-center rounded-xl p-[3px] text-sm sm:text-base lg:text-sm xl:text-base">
      <div className="me-auto flex flex-row items-center">
        <ThemeSwitcher />
        <Chip
          startContent={<Star size={16} className="text-white" />}
          classNames={{
            base: "bg-gradient-to-br bg-gradient-to-br from-purple-400 to-pink-400 border-small border-white/50 shadow-pink-500/30 ms-3 me-auto font-bold",
            content: "drop-shadow shadow-black text-white",
          }}
          variant="shadow"
        >
          Visitor Count: {data !== 0 ? data : isLoading}{" "}
          {/* Visitor Count: 0 */}
        </Chip>
      </div>
      <p className="ms-2 me-2 font-bold">{time}</p>
    </Card>
  );
};

export default Header;
