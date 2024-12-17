
import { AxiosError } from "axios";
import { ApiClient } from "shared/api/Client";

export const getProductsSearch = async (searchValue: string, productType?: string, type?: number, nicotine?: number, flavour?: string, special?: string, brand?: string) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service-main/search/product?search=${searchValue}&page=1${productType ? `&product-type=${productType}` : ''}${type ? `&type=${type}` : ''}${nicotine ? `&nicotine=${nicotine}` : ''}${flavour ? `&flavour=${flavour}` : ''}${special ? `&special=${special}` : ''}${brand ? `&brand=${brand}` : ''} `,
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
