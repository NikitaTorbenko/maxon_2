import { AxiosError } from "axios";
import { ApiClient } from "shared/api/Client";

export const addBasket = async (id: string) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service-main/add/cart/product?id=${id}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
      }
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
