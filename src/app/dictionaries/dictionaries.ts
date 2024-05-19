
type Lang  = "de"   

const dictionaries = {
  de: () => import("./de.json").then((module) => module.default),
}
 
export const getDictionary = async (locale: Lang) =>  dictionaries[locale]()
