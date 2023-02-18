import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "8112e96004msh90edc91229b01b7p1a53dajsnac9917ad9f2d",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
// const createRequest = (url) => ({url, headers: cryptoApiHeaders})

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl,
//   }),
//   endpoints: (builder) => ({
//     getCryptos:builder.query({query : () => createRequest('/exchanges')})
//   })
// });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,

    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "8112e96004msh90edc91229b01b7p1a53dajsnac9917ad9f2d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({ query: (count) => `/coins?limit=${count}` }),
    getCryptoDetails: builder.query({ query: (coinId) => `/coin/${coinId}` }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `/coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
    getExchanges: builder.query({
      query: () => `/exchanges`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
