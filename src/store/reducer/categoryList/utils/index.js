export const handleTagsData = (tags) => {
  return tags.map((item) => {
    return {
      name: item.name,
      id: item.id,
    };
  });
};
