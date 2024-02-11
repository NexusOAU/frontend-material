import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react"

export const QueryHelper = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname();



    const query = searchParams && searchParams.get('location') || ''

    const previousQuery = searchParams ? searchParams : ""

    const createParams = useCallback((name: string, value: string) => {
        const params = new URLSearchParams(previousQuery)
   
        params.set(name, value)
        return params.toString()
      }, [previousQuery])


    return createParams
}