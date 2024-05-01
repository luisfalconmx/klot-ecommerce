"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/utils";
import IconArrowDown from "@/assets/icons/icon-arrow-down.svg";
import IconX from "@/assets/icons/icon-x.svg";
import IconCheck from "@/assets/icons/icon-check.svg";
import type { ColorSelectorProps } from "./ColorSelector.d";

export const ColorSelector = ({ defaultValue, colors }: ColorSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const selectedColor =
    searchParams.get("color")?.toLowerCase() || defaultValue.toLowerCase();

  const handleRedirect = (value: string) => {
    params.set("color", value.toLowerCase());
    return `${location}?${params.toString()}`;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4"
        onClick={() => setIsOpen(true)}
      >
        <p className="font-bold">Color</p>
        <div className="flex items-center space-x-4">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: selectedColor }}
          />
          <Image src={IconArrowDown} alt="" width={24} height={24} />
        </div>
      </button>

      <dialog
        open={isOpen}
        className={cn(
          "fixed w-screen min-h-screen flex flex-col justify-end bottom-0 -left-[-100vw] m-auto bg-black/60",
          {
            "left-0": isOpen,
          }
        )}
      >
        <section className="bg-white px-6 pt-4 rounded-t-2xl">
          <div className="flex relative justify-center items-center">
            <b className="text-2xl mb-8">Color</b>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-5 right-0 bottom-0 m-auto"
            >
              <Image src={IconX} alt="" width={24} height={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-3 max-h-[320px] overflow-y-auto pb-8">
            {colors.map((i) => (
              <Link
                key={i}
                href={handleRedirect(i)}
                className={cn(
                  "flex justify-between w-full bg-pearl text-black px-8 py-5 rounded-full uppercase font-bold",
                  {
                    "bg-primary text-white": i.toLowerCase() === selectedColor,
                  }
                )}
              >
                {i}
                <div className="flex space-x-3">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 border-transparent",
                      {
                        "border-white": i.toLowerCase() === selectedColor,
                      }
                    )}
                    style={{ backgroundColor: i }}
                  />
                  <Image
                    src={IconCheck}
                    alt=""
                    width={24}
                    height={24}
                    className={cn("opacity-0", {
                      "opacity-100 cursor-default":
                        i.toLowerCase() === selectedColor,
                    })}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </dialog>
    </>
  );
};
