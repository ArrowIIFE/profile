import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
const fileDirectory = path.join(process.cwd(), "root-docs", "docs");
export function getDocument() {
  const getAllFileDirectory = fs.readdirSync(fileDirectory);
  const getMDwithOutAllDoc = getAllFileDirectory.map((filename) => {
    const id = filename.replace(".md", "");
    const getMdWithOutFullPath = path.join(fileDirectory, filename);
    const getMdReadFile = fs.readFileSync(getMdWithOutFullPath, "utf8");
    const getMdObject = matter(getMdReadFile);

    return {
      id,
      ...getMdObject.data,
    };
  });

  return getMDwithOutAllDoc.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

const getAllContent = async (id) => {
  const fullPathContent = path.join(fileDirectory, `${id}.md`);
  const fullPathRead = fs.readFileSync(fullPathContent, "utf8");
  const matterResult = matter(fullPathRead);
  const processContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processContent.toString();
  return {
    ...matterResult.data,
    contentHtml,
    id,
  };
};
export { getAllContent };
