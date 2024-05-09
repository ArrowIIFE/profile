import { getAllContent } from "@/lib/docs";
import Link from "next/link";
import Tag from "./Tag";
const ContentDisplay = async ({ id }) => {
  const documentContent = await getAllContent(id);
  return (
    <article>
      <div>
        <h1 className="font-bold">{documentContent.title}</h1>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link href={`/authors/${documentContent.author}`}>
          <span className="text-emerald-600">{documentContent.author}</span>
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          <span className="text-emerald-600">{documentContent.category}</span>
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;
