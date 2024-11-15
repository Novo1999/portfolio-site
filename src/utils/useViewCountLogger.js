import { getViewCount } from '@/actions.js'
import { useEffect, useState } from 'react'

const useViewCountLogger = () => {
    const [viewCount, setViewCount] = useState()

    useEffect(() => {
        let ignore = false
        const fetchViewCount = async () => {
            try {
                const data = await getViewCount()
                if (!ignore) setViewCount(data?.viewCount)
                return data
            } catch (error) {
                return null
            }
        }
        fetchViewCount()
        return () => {
            ignore = true
        }
    }, [])

    return viewCount
}
export default useViewCountLogger
