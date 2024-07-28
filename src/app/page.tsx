import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
