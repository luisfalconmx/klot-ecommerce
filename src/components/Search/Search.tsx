"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/utils/cn";
import styles from "./Search.module.css";
import IconArrowRight from "@/assets/icons/icon-arrow-right.svg";
import type { SearchProps } from "./Search.d";

export const Search = ({ className = "", defaultValue = "" }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?term=${searchTerm}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={cn(styles["Search"], className)}
    >
      <input
        className={cn(styles["Search__input"])}
        type="search"
        placeholder="Search"
        defaultValue={defaultValue}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};
