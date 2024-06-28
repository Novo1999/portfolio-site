import { incrementViewCount } from '@/actions.js'
import { useEffect } from 'react'

const useIncrementView = () => {
  useEffect(() => {
    const increment = async () => {
      try {
        const data = await incrementViewCount()
        console.log(data)
        return data
      } catch (error) {
        return null
      }
    }
    increment()
  }, [])
}
export default useIncrementView
