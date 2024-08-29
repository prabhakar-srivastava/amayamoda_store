import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import { Accordion } from "@/components/accordion";
import BrandNews from "@/components/brandNews";
import SwiperDemo from "@/components/swiper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <div className="px-6">
        <Collections />
        {/* <SwiperDemo /> */}
        <ProductList />
        <Accordion />
        <BrandNews />
      </div>


    </>
  );
}

export const dynamic = "force-dynamic";

