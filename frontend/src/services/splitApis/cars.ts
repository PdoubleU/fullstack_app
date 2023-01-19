import { fullstackAppApi } from "../fullstackAppApi";

export type CarObject = {
  license_plate: string;
  brand: string;
  model: string;
  production_year: number;
  seats_number: number;
  price_per_day: number;
};

type CarsDTO = {
  data: CarObject[];
};

const carsEndpoint = "/cars";

export const carsApi = fullstackAppApi
  .enhanceEndpoints({ addTagTypes: ["Cars"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCarsList: builder.query<any, void>({
        query: () => ({
          url: carsEndpoint,
        }),
        providesTags: () => ["Cars"],
      }),
      postCar: builder.mutation<any, CarObject>({
        query: (body) => ({
          url: carsEndpoint,
          method: "POST",
          body: body,
        }),
        invalidatesTags: ["Cars"],
      }),
      deleteCar: builder.mutation<any, { id: string }>({
        query: ({ id }) => ({
          url: `${carsEndpoint}/${id}`,
          method: "POST",
        }),
        invalidatesTags: ["Cars"],
      }),
    }),
  });
