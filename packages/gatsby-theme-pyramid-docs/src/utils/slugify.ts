const slugify = (basePath, str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
};

export default slugify;
