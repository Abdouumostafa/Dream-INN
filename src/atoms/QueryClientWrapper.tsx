"use client"
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const QueryClientWrapper = ({ children }: any) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default QueryClientWrapper