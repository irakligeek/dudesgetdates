import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        <div className="overflow-hidden mt-24 space-y-4">
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
        </div>

        <div className="overflow-hidden space-y-4">
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
        </div>

        <div className="overflow-hidden mt-9 space-y-4">
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
