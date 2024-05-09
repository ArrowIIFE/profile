export function getDocumentByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentByTags(docs, tag) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}

export function getDocumentByAuthors(docs, author) {
  return docs.filter((doc) => doc.author === author);
}
