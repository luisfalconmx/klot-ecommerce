import styles from "./Search.module.css";
import { cn } from "@/utils/cn";
import type { SearchProps } from "./Search.d";

export const Search = ({ className = "" }: SearchProps) => {
  return (
    <div className={cn(styles["Search"], className)}>
      <input
        className={cn(styles["Search__input"])}
        type="search"
        placeholder="Search"
      />
    </div>
  );
};
