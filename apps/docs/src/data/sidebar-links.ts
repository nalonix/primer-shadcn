import { transformToSlug } from "@/lib/utils"

import COMPONENTS from "./components"

const COMPONENTS_LINKS = COMPONENTS.map((component) => {
  return {
    href: `/components/${transformToSlug(component.name)}`,
    text: component.name,
  }
})

const GETTING_STARTED_LINKS = [
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/styling",
    text: "Styling",
  },

  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },

]

const MAIN_SIDEBAR = [
  "Getting started",
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/styling",
    text: "Styling",
  },
  {
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/figma",
    text: "Figma",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
  "Components",
  ...COMPONENTS_LINKS,
]

const MOBILE_MAIN_SIDEBAR = [
  "Getting started",
  ...GETTING_STARTED_LINKS,
  "Components",
  ...COMPONENTS_LINKS,
]

export {
  MAIN_SIDEBAR,
  MOBILE_MAIN_SIDEBAR,
  COMPONENTS_LINKS,
  GETTING_STARTED_LINKS,
}