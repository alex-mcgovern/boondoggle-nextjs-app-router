import { notFound } from "next/navigation";
import { COLUMNS, ProductsTable } from "./product-table";
import { DataTable } from "@alex-mcgovern/boondoggle.design";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const res = await fetch(
    // We intentionally delay the response to simulate a slow data
    // request that would benefit from `loading.js`
    `https://dummyjson.com/products/category/${params.category}`,
    {
      // We intentionally disable Next.js Cache to better demo
      // `loading.js`
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error("Something went wrong!");
  }

  const category = (await res.json()) as { products: Array<Product> };

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return <ProductsTable products={category.products} />;
}
