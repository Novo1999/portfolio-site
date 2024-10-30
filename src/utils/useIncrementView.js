import { incrementViewCount } from '@/actions.js'
import { useEffect } from 'react'

const useIncrementView = () => {
  useEffect(() => {
    const increment = async () => {
      try {
        const data = await incrementViewCount()
        return data
      } catch (error) {
        return null
      }
    }
    if(window.location.hostname === 'localhost') return
    increment()
  }, [])
}
export default useIncrementView
