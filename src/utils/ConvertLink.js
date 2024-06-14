export const getImageLink = (link) => {
  if (!link) {
    return "";
  }
  var newLink = link.replace(
    "https://drive.google.com/uc?export=view&id=",
    "https://lh3.google.com/u/0/d/"
  );

  return newLink;
};

export const getEmbedUrl = (url) => {
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://drive.google.com/file/d/${fileId[0]}/preview` : url;
};
