import axios from "axios";


export async function GetBalance(type: string) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    try {
        const res = await axios.get(`${apiUrl}/${user.id}/${type}/total`);
        console.log(res)
        return res.data
        

    } catch (err) {
        console.error("Failed to fetch balance:", err);
        return 0;
    }
}