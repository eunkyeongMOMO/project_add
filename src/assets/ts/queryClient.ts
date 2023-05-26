import { RequestDocument, request } from 'graphql-request'
import { QueryClient } from 'react-query'

//클라이언터 캐싱 옵션
export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false, //윈도우 마우수오버이벤트에 api 호출금지
          },
        },
      })
    return client
  }
})()


const BASE_URL = 'http://hstudyapi.teamcode88.com/graphql'

export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
  request(BASE_URL, query, variables)
  
// export const graphqlFetcher = (query: RequestDocument, variables = {}) =>
//   request(`${BASE_URL}`, query, variables, {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': BASE_URL,
// })

export const QueryKeys = {
  MENU: 'MENU',
  LECTURES: 'LECTURES',
  BANNERS: 'BANNERS',
  TEACHERS: 'TEACHERS',
}