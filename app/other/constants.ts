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
      { city: "Lawrence", link: "https://docs.google.com/document/d/1WgD3KAHzTW0ppuwPzIjl5MlzF_V156y5/edit?usp=sharing&ouid=105833784460411973638&rtpof=true&sd=true" },
    ]
  },
  {
    name: "Missouri",
    cities: [
    ]
  }
] as StateGuide[];

