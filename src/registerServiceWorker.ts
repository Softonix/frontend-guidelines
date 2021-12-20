import { register } from 'register-service-worker'
import { ElMessageBox } from 'element-plus'
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  let refreshing = false
  register(`${process.env.BASE_URL}service-worker.js`, {
    async updated (registration) {
      console.log('New content is available; please refresh.')
      if (registration && registration.waiting) {
        await ElMessageBox.confirm('', {
          title: 'New content available!',
          message: `
            <p>Clicking <b>Update</b> will reload the application.</p>
            <p class="mt-2"><b>Any unsaved changes will be lost.</b></p>
            <p class="mt-2">To save your work and update later, click <b>Cancel</b>.</p>
          `,
          showClose: false,
          customClass: 'w-375',
          dangerouslyUseHTMLString: true,
          closeOnPressEscape: false,
          closeOnClickModal: false,
          confirmButtonText: 'Update',
          confirmButtonClass: 'w-80',
          cancelButtonClass: 'el-button--primary is-plain w-80',
          cancelButtonText: 'Cancel',
          distinguishCancelAndClose: true
        })
        registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      }
    }
  })
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // We'll also need to add 'refreshing' to our data originally set to false.
    if (refreshing) return
    refreshing = true
    // Here the actual reload of the page occurs
    window.location.reload()
  })
}
