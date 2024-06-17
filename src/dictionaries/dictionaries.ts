type Lang  = "de"   
export type Dictionary = typeof import("./de.json")

const dictionaries = {
  de: () => import("./de.json").then((module) => module.default),
}
 
export const getDictionary = (locale: Lang) => dictionaries[locale]()
