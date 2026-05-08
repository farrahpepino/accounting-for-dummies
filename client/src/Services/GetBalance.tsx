import axios from "axios";
import type { AccountDto } from "../DTOs/account";

export async function GetBalance(type: string) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    try {
        const accounts = await axios.get(`${apiUrl}/accounts/${user.id}/${type}`);
        
        let balance = 0;

        accounts.data.forEach((account: AccountDto) => {
            balance += account.balance;
        });

        return balance;
    }
    catch (err) {
        console.error("Failed to fetch balance:", err);
        return 0;
    }
}