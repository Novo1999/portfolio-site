import { incrementViewCount } from '@/actions.js'
import { useSearchParams } from 'next/navigation.js'
import { useEffect } from 'react'

const useIncrementView = () => {
    const searchParams = useSearchParams()
    useEffect(() => {
        const increment = async () => {
            try {
                const data = await incrementViewCount()
                return data
            } catch (error) {
                return null
            }
        }
        if (window.location.hostname === 'localhost' || searchParams.get('user') === 'novo') return;
        increment()
    }, [searchParams])
}
export default useIncrementView
