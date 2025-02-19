import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharacterDetail } from '../types';

const buildQueryParams = (params: { name?: string; limit: number }) => {
  const query = new URLSearchParams();
  query.append('limit', params.limit.toString());
  if (params.name) {
    query.append('name', params.name);
  }
  return query.toString();
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dragonball-api.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Character[], { name?: string; limit?: number }>({
      query: ({ name, limit = 50 }: { name?: string; limit?: number }) => {
        return `characters?${buildQueryParams({ name, limit })}`;
      },
      transformResponse: (response: any, meta: any, arg: { name?: string }) => {
        let characters = arg.name? response : response.items;

        return characters.map((item: any) => ({
          id: item.id,
          name: item.name,
          image: item.image,
        }));
      },
    }),
    getCharacterById: builder.query<CharacterDetail, string>({
      query: (id) => `characters/${id}`,
      transformResponse: (response: any) => ({
        id: response.id,
        ki: response.ki,
        maxKi: response.maxKi,
        race: response.race,
        name: response.name,
        description: response.description,
        image: response.image,
        transformations: response.transformations.map((transformation: any) => ({
          id: transformation.id,
          name: transformation.name,
          image: transformation.image,
          ki: transformation.ki,
        })),
      }),
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;