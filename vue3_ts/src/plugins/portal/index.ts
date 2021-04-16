import { Plugin } from 'vue'
import PortalTarget from '@/plugins/portal/PortalTarget.vue'
import Portal from '@/plugins/portal/Portal.vue'
import { TCallbackFn, TIndexedObject } from '@/types'

const portalNames = {
  sidebar: 'sidebar-portal',
  header: 'header-portal'
}

class PortalService {
  events: TIndexedObject<TCallbackFn[]> = {}

  renderPortals = (id: string) => {
    if (Array.isArray(this.events[id])) {
      this.events[id].forEach(cb => cb())
    }
  }

  registerPortal = (id: string, cb: TCallbackFn) => {
    if (Array.isArray(this.events[id])) {
      if (!this.events[id].includes(cb)) {
        this.events[id].push(cb)
      }
    } else {
      this.events[id] = [cb]
    }
  }

  removePortal = (id: string, cb: TCallbackFn) => {
    const cbIndex = this.events[id].indexOf(cb)
    if (cbIndex > 0) {
      this.events[id].splice(cbIndex, 1)
    }
  }
}

const portalService = new PortalService()

type TRenderPortals = typeof portalService.renderPortals
type TRegisterPortal = typeof portalService.registerPortal
type TRemovePortal = typeof portalService.removePortal

const PortalPlugin: Plugin = {
  install: (app) => {
    app.provide('renderPortals', portalService.renderPortals)
    app.provide('registerPortal', portalService.registerPortal)
    app.provide('removePortal', portalService.removePortal)

    app.component(Portal.name, Portal)
    app.component(PortalTarget.name, PortalTarget)
  }
}

export {
  portalNames,
  PortalPlugin,
  TRenderPortals,
  TRegisterPortal,
  TRemovePortal
}
