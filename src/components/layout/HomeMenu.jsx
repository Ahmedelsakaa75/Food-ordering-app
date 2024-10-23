import React from "react";
import Image from "next/image";
import sallad1 from "../../../public/sallad1.png";
import sallad2 from "../../../public/sallad2.png";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
  return (
    <section>
      <div className="absolute h-full left-0 right-0 w-full justify-start">
        <div className="absolute -top-[70px] left-0 -z-10 text-left">
          <Image width={107} height={195} src={sallad1} alt={"Sallad"} />
        </div>
        <div className="absolute -top-24 right-0 -z-10">
          <Image width={107} height={195} src={sallad2} alt={"Sallad"} />
        </div>
      </div>
<SectionHeaders subHeader={'Check Out'} mainHeader={'Menu'} />
      <div className="grid grid-cols-3 gap-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
      </div>
    </section>
  );
}
