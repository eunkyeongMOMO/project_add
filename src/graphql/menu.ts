import { gql } from 'graphql-tag'

export type Menu = {
  name: string
  link: string
  sub: null | SubMenu[]
}

export type SubMenu = {
  name: string
  link: string
  sub: null | SubMenu[]
}


export const GET_MENU = gql`
  query GET_MENU {
    name
    link
    sub {
      name
      link
      sub {
        name
        link
      }
    }
  }
`
export default GET_MENU