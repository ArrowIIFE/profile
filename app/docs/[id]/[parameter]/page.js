import ContentDisplay from "@/components/ContentDisplay";
const SubContenctPage = ({ params: { parameter } }) => {
  return (
    <div>
      <ContentDisplay id={parameter} />
    </div>
  );
};
export default SubContenctPage;
