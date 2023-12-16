import axios, { AxiosError, AxiosResponse } from "axios";
import {
  GetProductsParams,
  GetProductsData,
  TODO_ANY,
  GetProductByIdParams,
  ProductType,
  // RequestError,
} from "./types";
import { ServerName } from "./config";

// TODO: Как сделать обработку ошибок с axios

export const getProducts = async (params: GetProductsParams) => {
  // try {
  return await axios.get<GetProductsData>(ServerName + "api/products", {
    params,
  });
  // } catch {
  //   // return null;
  // }
};
export const getProductById = async (params: GetProductByIdParams) => {
  return await axios.get<ProductType>(ServerName + `api/products/${params.id}`);
};
