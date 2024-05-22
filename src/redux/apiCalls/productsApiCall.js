import { productsActions } from "../slices/productsSlice";
import axios from "axios";
import { toast } from "react-toastify";

export function fetchProductEvotor() {
    return async (dispatch) => {
        try {
            dispatch(productsActions.setLoading(true));
            const { data } = await axios.get("https://api.evotor.ru/stores/20240313-83DF-4098-8098-3B158EFF6FDC/products/", {
                headers: {
                    Authorization: "Bearer e84b843c-d503-49c9-ac00-422305746093",
                }
            });
            dispatch(productsActions.setProduct(data.items));
        } catch (e) {
            console.log(e);
            toast.error("No Data!");
        } finally {
            dispatch(productsActions.setLoading(false));
        }
    };
}
export function updateProductEvotor(productId, updatedProductData) {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(
                `https://api.evotor.ru/stores/20240313-83DF-4098-8098-3B158EFF6FDC/products/${productId}`,
                updatedProductData,
                {
                    headers: {
                        Authorization: "Bearer e84b843c-d503-49c9-ac00-422305746093",
                        "Content-Type": "application/json"
                    }
                }
            );
            dispatch(productsActions.updateProduct(data)); // تأكد من استخدام الأكشن الصحيح
            toast.success("Product updated successfully!");
        } catch (e) {
            console.log(e);
            toast.error("Failed to update product!");
        }
    };
}
export function addProductEvotor(updatedProductData) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(
                `https://api.evotor.ru/stores/20240313-83DF-4098-8098-3B158EFF6FDC/products/`,
                updatedProductData,
                {
                    headers: {
                        Authorization: "Bearer e84b843c-d503-49c9-ac00-422305746093",
                        "Content-Type": "application/json"
                    }
                }
            );
            dispatch(productsActions.updateProduct(data)); // تأكد من استخدام الأكشن الصحيح
            toast.success("Product add successfully!");
        } catch (e) {
            console.log(e);
            toast.error("Failed to add product!");
        }
    };
}
export function deleteProductEvotor(ProductId) {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(
                `https://api.evotor.ru/stores/20240313-83DF-4098-8098-3B158EFF6FDC/products/${ProductId}`,
                {
                    headers: {
                        Authorization: "Bearer e84b843c-d503-49c9-ac00-422305746093",
                    }
                }
            );
            dispatch(productsActions.updateProduct(data)); // تأكد من استخدام الأكشن الصحيح
            toast.success("Product delete successfully!");
        } catch (e) {
            console.log(e);
            toast.error("Failed to delete product!");
        }
    };
}