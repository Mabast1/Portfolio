export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
