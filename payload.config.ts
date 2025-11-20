import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Blogs } from "@/collections/Blogs";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Server URL for generating absolute URLs (required for media in production)
  // serverURL:
  // process.env.PAYLOAD_PUBLIC_SERVER_URL || `https://bixana.vercel.app`,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.VERCEL_BLOB_STORAGE_TOKEN!,
    }),
  ],

  // Define and configure your collections in this array
  collections: [Users, Media, Blogs],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "1234567890",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  // db: mongooseAdapter({
  //   url: process.env.DATABASE_URI || "mongodb://localhost:27017/bixana",
  // }),

  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
