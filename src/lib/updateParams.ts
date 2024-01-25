import { useSearchParams, usePathname } from 'next/navigation'
import { useCallback, useEffect } from 'react'

export const useUpdateParams = (): ((value: {
    [key: string]: string | undefined
}) => void) => {
    const searchParams = useSearchParams()!

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const updateParams = useCallback(
        (value: { [key: string]: string | undefined }) => {
            const params = new URLSearchParams(searchParams)
            Object.entries(value).forEach(([k, v]) => {
                if (v) params.set(k, v)
                else params.delete(k)
            })
            window.history.pushState({}, '', params.toString())
        },
        [searchParams],
    )

    return updateParams
}
