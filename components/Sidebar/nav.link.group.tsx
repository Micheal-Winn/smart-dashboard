"use client";
import React, { useMemo, useState } from "react";
import { SibebarLists } from "@/components/utils/DummyData/data";
import Link from "next/link";
import { IconArrowNarrowDown,IconChevronUp,IconChevronDown } from "@tabler/icons-react";
import { MobileNavLists } from "@/Type";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";

const NavLinkGroup: React.FC<SubMenuProps> = ({ data }) => {
  const router = useRouter();
  const [subNav, setSubNav] = useState(false);
  const openSubHandler = () => setSubNav(!subNav);
  const routeHandler = ()=> router.push(`${data.path}`)
  const pathname = usePathname();
  console.log("path",pathname)
  console.log("render SubMenu")
  return (
    <ul className="flex flex-col w-full  text-md">
      <li
        className={`flex rounded-md  w-full justify-between items-center cursor-pointer sm:text-[0.57rem] md:text-[0.6rem] lg:text-[0.7rem] xl:text-sm 2xl:text-md   py-2 px-2 ${pathname === data.path ? 'bg-blue-500 text-white': ''}`}
        onClick={data.nested !== undefined ? openSubHandler : routeHandler}
      >
        <div className="flex gap-2 items-center">
          {data.leftIcon}
          <span>{data.name}</span>
        </div>
        {/* <Link href={""}>{data.name} </Link> */}
        {data.nested !== undefined && (subNav ? <IconChevronUp className="text-gray-400 cursor-pointer" size={"0.8rem"}/> : <IconChevronDown className="text-gray-400" size={"0.8rem"}/>)}
      </li>

      {data.nested !== undefined && data.nested.length > 0 && subNav && (
        <div className="mt-2 ml-2 flex flex-col gap-2 border-l border-gray-400">
          {data.nested.map((nestLink) => (
            <ul
              key={nestLink.id}
              className={`pl-4 hover:bg-slate-300 rounded-md ml-1 ${pathname === nestLink.path ? 'bg-blue-500 text-white': ''}`}
            >
              <li key={nestLink.id} className="text-[0.6rem] lg:text-[0.7rem] xl:text-sm 2xl:text-base py-2">
                <Link href={nestLink.path}>{nestLink.name}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </ul>
  );
};

export default NavLinkGroup;

interface SubMenuProps {
  data: MobileNavLists;
}
