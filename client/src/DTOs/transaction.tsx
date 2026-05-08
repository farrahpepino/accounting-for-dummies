import type { AccountDto } from "./account"
export interface TransactionDto {
    id?: string 
    user_id: string
    type: string
    source_account: AccountDto
    destination_account: AccountDto
    category: string
    amount: number
    date: Date
    note: string
}