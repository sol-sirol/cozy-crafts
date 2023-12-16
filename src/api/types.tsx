export type TODO_ANY = any;
export type Brand<T, U> = T & { __brand: U };

// export type UserId = Brand<number, "userId">;
export type ProductId = Brand<number, "productId">;

// export type CategoryId = Brand<number, "categoryId">;
export type MaterialId = Brand<number, "materialId">;
export type SeasonId = Brand<number, "seasonId">;
export type ColorId = Brand<number, "colorId">;

// export type RequestError = {
//   message: string;
//   code: number;
// };

export type GetProductsParams = {
  categoryId?: number;
  materialIds?: MaterialId[];
  seasonIds?: SeasonId[];
  colorIds?: ColorId[];

  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
};
export type GetProductByIdParams = {
  id: ProductId;
};
export type GetProductsData = { items: ProductType[] };

export type ProductType = {
  id: ProductId;
  title: string;
  slug: string;
  price: number;
  colors: {
    id: number;
    color: { id: ColorId; title: string; code: string };
    gallery:
      | {
          file: {
            url: string;
            name: string;
            originalName: string;
            extension: string;
            size: string;
          };
        }[]
      | null;
  }[];
  seasons: {
    id: SeasonId;
    title: string;
    code: string;
    productsCount: number;
  }[];
  materials: {
    id: MaterialId;
    title: string;
    code: string;
    productsCount: number;
  }[];
};
