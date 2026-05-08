export interface AccountDto  {
    id?: string,
    user_id: string
    type: string
    bank: string
    balance: number
    date: Date | null
    last_digits: number
}

