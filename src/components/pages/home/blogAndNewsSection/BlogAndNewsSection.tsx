import type { JSX } from "react";
import { BlogGrid } from "../../../organisms"

export const BlogAndNewsSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[200px] py-20 md:py-[150px]">
      <div className="max-w-[1561px] mx-auto">
        <div className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#2f327d] text-3xl md:text-4xl tracking-[0] leading-tight mb-4">
            Lastest News and Resources
          </h2>
          <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#696983] text-xl md:text-2xl tracking-[0] leading-relaxed">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        <BlogGrid />
      </div>
    </section>
  );
};

export default BlogAndNewsSection;
