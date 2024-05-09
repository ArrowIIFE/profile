import ContentDisplay from "@/components/ContentDisplay";
import { getDocument } from "@/lib/docs";
import { getDocumentByAuthors } from "@/utils/getDocumentUtils";
export default function AuthorPage({ params: { auth } }) {
  const docs = getDocument();
  const matchAuthor = getDocumentByAuthors(docs, auth);
  return (
    <div>
      <ContentDisplay id={matchAuthor[0].id} />
    </div>
  );
}
