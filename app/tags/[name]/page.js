import ContentDisplay from "@/components/ContentDisplay";
import { getDocument } from "@/lib/docs";
import { getDocumentByTags } from "@/utils/getDocumentUtils";
export default function TagsPage({ params: { name } }) {
  const docs = getDocument();
  const matchTag = getDocumentByTags(docs, name);
  return (
    <div>
      <ContentDisplay id={matchTag[0].id} />
    </div>
  );
}
