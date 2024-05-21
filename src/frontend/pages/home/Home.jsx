import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import EvotorCard from "./EvotorCard";
import {fetchProductEvotor} from "../../../redux/apiCalls/productsApiCall";
import {ToastContainer} from "react-toastify";
import {BounceLoader, MoonLoader} from "react-spinners";
import Loding from "./Loding";
import Loding1 from "./Loding";
import {CircularProgress} from "@mui/joy";

export function Home() {
    const [search, setSearch] = useState("");
    const {products, isLoading} = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductEvotor())
    }, [dispatch]);
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    // console.log("filteredProducts "+filteredProducts)
    const productsBySearch = filteredProducts.map((t, index) => {
        return <div key={t.uuid}>
            <EvotorCard Product={t} index={index}/>
        </div>
    })

    return (
        <div style={{
            display: 'flex',
            width: "100%",
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: "center",
            marginTop: "20px",
        }}>
            <label>поиск</label>
            <input
                style={{
                    padding: "10px",
                    width: '50%',
                    margin: "10px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "14px",
                }}
                value={search} onChange={(e) => setSearch(e.target.value)}/>

            <div style={{overflow: "scroll",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",  flexDirection:"column"}}>
                <div style={{height: "80vh", marginTop: "10px"}}>
                    {
                        isLoading ? <CircularProgress size="lg" /> :
                            products.length > 0 ? productsBySearch : <h1>No products found</h1>
                    }
                </div>


            </div>


        </div>
    )
}