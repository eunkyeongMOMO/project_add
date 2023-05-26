import { gql } from 'graphql-tag'

export type Item ={
  idx: number
  icon: {
    isBest: boolean
    isNew: boolean
    isEvent: boolean
    isNote: boolean
  }
  title: string
  description: string
  description2: string
  period: number
  totalNum: number
  useMobile: boolean
  usePc: boolean
  sampleLecture: string
  bookUrl: string
  price: number
  sellingPrice: number
  couponPrice: number
  eventPrice: number
  point: number
}

export type Lecture = {
  cateIdx: number
  cateImg: string
  cateTitle: string
  cateSubTitle: string
  cateDescription: string
  cateDescription1: string
  cateDescription2: string
  items : Item[]
}

export type Lectures = {
  length: number
  lectures: Lecture[]
}

export type Items = {
  length: number
  lectures: Item[]
}


export const GET_LECTURES = gql`
  query GET_LECTURES {
    cateIdx
    cateTitle
    cateSubTitle
    cateDescription
    cateDescription1
    cateDescription2
    items{
      idx
      icon {
        isBest
        isNew
        isEvent
        isNote
      }
      title
      description
      description2
      period
      totalNum
      useMobile
      usePc
      sampleLecture
      bookUrl
      price
      sellingPrice
      couponPrice
      eventPrice
      point
    }
  }
`
export default GET_LECTURES
