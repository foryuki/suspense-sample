import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createCache, createResource } from 'react-cache'

const cache = createCache()

const InvoiceResource = createResource(
  (id) => {
    return fetch(`https://easy-mock.com/mock/5bcfd7684705a54038a156b9/test/invoices/${id}`)
      .then(response => {
        return response.json()
      })
  }
)

const Invoice = ({ invoiceId }) => {
  let invoice = InvoiceResource.read(cache, invoiceId)
  return (
    <h1>{invoice.number}</h1>
  )
}

export default Invoice
