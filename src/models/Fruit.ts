class Nutrition {
  Calories ?: string
  Proteins ?: string
  Carbohydrates ?: string
  Fat ?: string
  Sugar ?: string
}


export default class Fruit {
  name: string
  genus: string
  family: string
  order: string
  nutritions: Nutrition 

  constructor(obj: any) {
    const {
      name,
      genus,
      family,
      order,
      nutritions,
    } = obj

    this.family= family
    this.genus= genus
    this.name= name
    this.order= order
    this.nutritions= nutritions
  }
}
