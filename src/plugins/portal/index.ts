import type { Plugin } from 'vue'

const portalNames = {
  sidebar: 'sidebar',
  header: 'header'
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

    app.config.globalProperties.$portalNames = portalNames
  }
}

export {
  portalNames,
  PortalPlugin
}

export type {
  TRenderPortals,
  TRegisterPortal,
  TRemovePortal
}
