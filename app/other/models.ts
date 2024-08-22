export interface NavItem {
  title: string,
  href: string
}

export interface CityGuide {
  city: string,
  link?: string
}

export interface StateGuide {
  name: string,
  cities: CityGuide[]
}

