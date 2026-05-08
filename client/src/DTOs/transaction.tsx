export interface TransactionDto {
    id?: string 
    user_id: string
    type: string
    from_bank: string
    to_bank: string
    category: string
    amount: number
    date: Date
    note: string
}