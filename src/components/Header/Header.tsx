import React from 'react'
import { useQuery, useMutation, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../../GraphQL/Queries'

function Header() {
  const { loading, error, data } = useQuery(LOAD_PRODUCTS);

  if (data) {console.log(data)}

  return (
    <header>
      This is the header
    </header>
  )
}

export default Header
