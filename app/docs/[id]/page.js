import ContentDisplay from "@/components/ContentDisplay";

const ContentIDPage = ({ params: { id } }) => {
  return (
    <div>
      <ContentDisplay id={id} />
    </div>
  );
};
export default ContentIDPage;
