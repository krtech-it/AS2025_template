import { boot } from 'quasar/wrappers'
import Gantt from '@xpyjs/gantt'
import '@xpyjs/gantt/dist/index.css'

export default boot(({ app }) => {
  app.use(Gantt)
})
