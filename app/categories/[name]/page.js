import ContentDisplay from "@/components/ContentDisplay";
import { getDocument } from "@/lib/docs";
import { getDocumentByCategory } from "@/utils/getDocumentUtils";
export default function CategoriesPage({ params: { name } }) {
  const docs = getDocument();
  const matchCategory = getDocumentByCategory(docs, name);
  return (
    <div>
      <ContentDisplay id={matchCategory[0].id} />
    </div>
  );
}
