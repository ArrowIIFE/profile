"use client";
import {
  getDocumentByAuthors,
  getDocumentByCategory,
  getDocumentByTags,
} from "@/utils/getDocumentUtils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Sidebar = ({ docs }) => {
  const pathname = usePathname();
  const [rootNodeId, setRootNodeId] = useState([]);
  const [nonRootNodeId, setNonRootNodeId] = useState({});
  useEffect(() => {
    let matchDocs = docs;
    if (pathname.includes("/tags")) {
      const tag = pathname.split("/")[2];
      matchDocs = getDocumentByTags(docs, tag);
    } else if (pathname.includes("/authors")) {
      const author = pathname.split("/")[2];
      matchDocs = getDocumentByAuthors(docs, author);
    } else if (pathname.includes("/categories")) {
      const category = pathname.split("/")[2];
      matchDocs = getDocumentByCategory(docs, category);
    }
    const root = matchDocs.filter((doc) => !doc.parent);
    const nonRoot = Object.groupBy(
      matchDocs.filter((doc) => doc.parent),
      ({ parent }) => parent
    );

    const nonRootKey = Reflect.ownKeys(nonRoot);
    const nonRootInRoot = nonRootKey.forEach((key) => {
      const foundNonRootInRootId = root.find((root) => root.id === key);
      if (!foundNonRootInRootId) {
        const findInDocs = docs.find((doc) => doc.id === key);
        root.push(findInDocs);
      }
    });

    root.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    });

    setRootNodeId([...root]);
    setNonRootNodeId({ ...nonRoot });
  }, [pathname, docs]);

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {rootNodeId.map((rootId) => (
          <li className="relative" key={rootId.id}>
            <Link
              aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${rootId.id}`}
            >
              <span className="truncate">{rootId.title}</span>
            </Link>
            {nonRootNodeId[rootId.id] && (
              <ul role="list">
                {nonRootNodeId[rootId.id].map((subRootId) => (
                  <li key={subRootId.id}>
                    <Link
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={`/docs/${rootId.id}/${subRootId.id}`}
                    >
                      <span className="truncate">{subRootId.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
