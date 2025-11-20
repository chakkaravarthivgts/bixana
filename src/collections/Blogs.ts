import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "URL-friendly version of the title (e.g., 'ai-empathy-dental-staff')",
      },
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "BLOGS", value: "BLOGS" },
        { label: "NEWS", value: "NEWS" },
        { label: "INSIGHTS", value: "INSIGHTS" },
        { label: "ARTICLES", value: "ARTICLES" },
        { label: "RESEARCH", value: "RESEARCH" },
      ],
      required: true,
      defaultValue: "BLOGS",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "intro",
      type: "textarea",
      required: true,
      admin: {
        description: "Introduction paragraph shown at the top of the article",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: "sections",
      type: "array",
      label: "Article Sections",
      fields: [
        {
          name: "number",
          type: "number",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "icon",
          type: "select",
          options: [
            { label: "Crown", value: "crown" },
            { label: "Lightbulb", value: "lightbulb" },
            { label: "Checkmark", value: "checkmark" },
            { label: "Heart", value: "heart" },
            { label: "Plant", value: "plant" },
            { label: "Scales", value: "scales" },
            { label: "Sparkle", value: "sparkle" },
          ],
          required: false,
        },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
    {
      name: "takeaway",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          defaultValue: "The Takeaway",
        },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
    {
      name: "ctaLinks",
      type: "array",
      label: "Call to Action Links",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        // Auto-generate slug from title if not provided
        if (operation === "create" && data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        return data;
      },
    ],
  },
};
