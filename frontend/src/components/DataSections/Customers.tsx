import React from 'react'
import { customersApi } from '../../services/splitApis/customers';

type Props = {}

function Customers({}: Props) {
     const { data, isLoading } = customersApi.useGetCustomersListQuery();
    console.log(data);
  return (
    <>
        <div>Customers</div>
        {isLoading && <h1>Loading...</h1>}
        <ul>
        {data && data.map((elem: any) => <h2 key={elem.national_id_number}>{elem.first_name}</h2>)}
        </ul>
    </>
    
  )
}

export default Customers