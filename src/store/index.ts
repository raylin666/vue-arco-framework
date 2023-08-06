import { createPinia } from 'pinia'
import useCounterStore from './counter'

const pinia = createPinia()

export { useCounterStore }

export default pinia
