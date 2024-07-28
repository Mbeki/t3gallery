import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://res.cloudinary.com/dja66bd2c/image/upload/v1720116861/samples/woman-on-a-football-field.jpg",
  "https://res.cloudinary.com/dja66bd2c/image/upload/v1720116860/samples/cup-on-a-table.jpg",
  "https://res.cloudinary.com/dja66bd2c/image/upload/v1720116856/samples/breakfast.jpg",
  "https://res.cloudinary.com/dja66bd2c/image/upload/v1720116843/samples/landscapes/nature-mountains.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={Math.random()} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
