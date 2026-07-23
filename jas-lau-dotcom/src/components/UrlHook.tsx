import { useEffect } from "react";
import { pathFromPage } from "../App";
import { PageKey } from "../data/projects";

interface Item {
  id: string;
  [key: string]: any;
}

export function useItemUrlSync<T extends Item>(
  page: PageKey,
  items: T[],
  selectedItem: T | null,
  setSelectedItem: (item: T | null) => void
) {
  const basePath = pathFromPage(page);

  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const expectedPrefix = basePath === "/" ? "" : basePath;
    if (!currentPath.startsWith(expectedPrefix)) return;

    const slug = currentPath.slice(expectedPrefix.length).replace(/^\/+/, "");
    if (!slug) return;

    const item = items.find((i) => i.id === slug);
    if (item) setSelectedItem(item);
  }, [items]);

  useEffect(() => {
    const normalizedBase = basePath.replace(/\/$/, "");
    if (selectedItem) {
      window.history.replaceState({}, "", `${normalizedBase}/${selectedItem.id}`);
    } else {
      window.history.replaceState({}, "", normalizedBase || "/");
    }
  }, [selectedItem, basePath]);
}