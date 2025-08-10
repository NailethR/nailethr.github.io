"use client";
import data from "@/data";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function Technologies() {
  const ref = useRef(null);
  useCurSection(ref);
  return (
    <div ref={ref} className="flex gap-4 items-center flex-col justify-center bg-muted w-full py-12 my-12 overflow-hidden">
      <h2 className="text-2xl font-bold">
        <span className="text-gradient-secondary">My Technologies</span>
      </h2>
      <Marquee autoFill pauseOnClick>
        <div className="flex gap-4 items-center justify-center w-11/12 p-2">
          {data.technologies.skills.map((skill) => (
            <div key={skill.name} className="bg-background border size-[70px] md:size-[90px] flex items-center justify-center rounded-full overflow-hidden p-6 flex-shrink-0 hover:bg-border">
              <Image className="h-full w-auto" src={skill.src} alt={skill.name} width={50} height={50} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
