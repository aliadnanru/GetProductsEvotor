import {productsActions} from "../slices/productsSlice";
import axios from "axios";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";
export function fetchProductEvotor() {
    return async (dispatch) => {
        try {
            dispatch(productsActions.setLoading(true)); // بدء حالة التحميل
            const {data} = await axios.get("https://api.evotor.ru/api/v1/inventories/stores/20240313-83DF-4098-8098-3B158EFF6FDC/products",{
                headers: {
                    Authorization: "Bearer e84b843c-d503-49c9-ac00-422305746093",
                }
            });
            dispatch(productsActions.setProduct(data))

        } catch (e) {
            console.log(e)
            toast.error("No Data!")
        }
    }
}
