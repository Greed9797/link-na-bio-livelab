import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/links";

export default function LinkButton({ href, parts }: LinkItem) {
  const isExternal = /^https?:\/\//.test(href) || href === "#";
  const Tag = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? { target: href !== "#" ? "_blank" : undefined, rel: href !== "#" ? "noopener noreferrer" : undefined }
    : {};

  return (
    <Tag
      href={href}
      {...externalProps}
      className="relative block h-[150px] w-[273px] overflow-hidden rounded-[12px] bg-[#0d0d0d] transition-opacity hover:opacity-90 md:h-[140px] md:w-[360px]"
    >
      {/* Orange line at top center */}
      <div className="absolute left-1/2 top-0 h-[3px] w-[97px] -translate-x-1/2 bg-[#FE5206]" />

      {/* Content */}
      <div className="flex h-full flex-col items-center justify-center gap-[12px] px-[20px] py-[16px]">
        <p className="text-center text-[18px] font-normal leading-[1.3] text-white md:text-[18px]">
          {parts.map((p, i) =>
            p.bold ? (
              <strong key={i} className="font-bold">{p.text}</strong>
            ) : (
              <span key={i}>{p.text}</span>
            )
          )}
        </p>

        <div className="flex justify-center">
          <span className="inline-flex h-[38px] items-center gap-[8px] rounded-[8px] bg-[#CC4400] px-[20px] md:h-[34px]">
            <span className="text-[14px] font-medium leading-none text-white">Clique aqui</span>
            <ArrowUpRight className="h-[14px] w-[14px] text-white" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Tag>
  );
}
