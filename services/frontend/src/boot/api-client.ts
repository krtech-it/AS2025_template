import { client } from 'src/client/client.gen'
import * as types from 'src/client/types.gen'
import * as sdk from 'src/client/sdk.gen'
import { Dialog } from 'quasar'
import ErrorDialog from 'components/dialogs/ErrorDialog.vue'

client.interceptors.response.use((response) => {
  let componentProps
  if (response.status === 500) {
    Dialog.create({
      component: ErrorDialog,
      componentProps
    })
  }
  if (response.status === 404) {
    Dialog.create({
      component: ErrorDialog,
      componentProps
    })
  }
  return response
})

export { client, types, sdk }
