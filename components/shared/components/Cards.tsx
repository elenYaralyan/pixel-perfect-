import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CardsProps {
  title: string;
  image: string;
  color: string;
  textColor: string;
  learnMore?: string;
}

const Cards = ({ title, image, color, textColor, learnMore }: CardsProps) => (
  <div
    className={cn(
      "p-[3.125rem] border flex-col lg:flex-row rounded-[2.813rem] font-space max-w-[600px] shadow-[0px_5px_0px_0px_#000] min-h-[310px] flexBetween",
      color
    )}
  >
    <div className="flex flex-col lg:justify-between h-full">
      <h3 className={cn("text-3xl leading-tight font-medium mb-6")}>
        {(() => {
          const words = title.split(" ");

          if (words.length === 2) {
            return words.map((word, i) => (
              <span
                key={i}
                className={cn(
                  "block w-fit rounded-md px-[0.438rem]",
                  textColor
                )}
              >
                {word}
              </span>
            ));
          }
          return words
            .reduce((acc: string[][], word, idx) => {
              if (idx % 2 === 0) acc.push([word]);
              else acc[acc.length - 1].push(word);
              return acc;
            }, [])
            .map((chunk, i) => (
              <span
                key={i}
                className={cn(
                  "block w-fit rounded-md px-[0.438rem]",
                  textColor
                )}
              >
                {chunk.join(" ")}
              </span>
            ));
        })()}
      </h3>
      <div
        className={cn(
          "text-xl flex items-center gap-[0.938rem]",
          learnMore ? "text-white" : "text-black"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full",
            learnMore ? "bg-white" : "bg-black"
          )}
        >
          <ArrowUpRight
            className={cn(
              "w-8 h-8",
              learnMore ? "stroke-black" : "stroke-lime-400"
            )}
            strokeWidth={2.5}
          />
        </div>
        Lear more
      </div>
    </div>
    <Image
      src={image}
      alt={title}
      width={210}
      height={166}
      className="object-contain "
    />
  </div>
);

export default Cards;
