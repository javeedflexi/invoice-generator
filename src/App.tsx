import Footer from './components/Footer'
import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) { }

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (

    <>
      <div className="app">
        <h1 className="center fs-30">Flexi Invoice Generator</h1>
        <InvoicePage data={data} onChange={onInvoiceUpdated} />

      </div>
      <Footer />
    </>
  )
}

export default App
