import { NavItem, StateGuide } from "./models"

export const NAVLINKS = [
  { title: "About", href: "/#about" },
  { title: "Contact", href: "/#contact" },
  { title: "Guides", href: "/guides" }
] as NavItem[]

export const STATES = [
  {
    name: "Kansas",
    cities: [
      {
        city: "Lawrence (English)",
        link: "/doc/guide_lawrence_en.pdf"
      },
    ]
  },
  {
    name: "Missouri",
    cities: [
    ]
  },
] as StateGuide[];

