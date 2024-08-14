import type { StarlightUserConfig } from '@astrojs/starlight/types'
import data from './sidebar.json'

type StarlightSidebar = StarlightUserConfig['sidebar']

interface SidebarSection {
  label: string
  kind: {
    discriminant: 'items' | 'autogenerate'
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    value: any
  }
}

interface SidebarItem {
  label: string
  link: string
}

const sidebarData = (data.sections as SidebarSection[]).map((section) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const transformedSection: any = { label: section.label }

  if (section.kind.discriminant === 'items') {
    transformedSection.items = (section.kind.value as SidebarItem[]).map((item) => ({
      label: item.label,
      link: item.link
    }))
  }

  if (section.kind.discriminant === 'autogenerate') {
    transformedSection.autogenerate = section.kind.value
  }

  return transformedSection
}) as StarlightSidebar

export { sidebarData }
