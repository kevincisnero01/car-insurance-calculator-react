import React,{useState} from 'react';
import Layout from './components/layout/Layout';
import InsuranceForm from './components/Insurance/InsuranceForm';
import Card from './components/common/Card';
import QuoteSummary from './components/Quotation/QuoteSummary';
import QuoteResult from './components/Quotation/QuoteResult';


function App() {
  //Definir state 
  //Inicializar state de resumen con datos vacios
  const [summary,setSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  //Destructurar datos del resumen
  const { quotation, data } = summary;

  return (
  <>
   <Layout>
      <Card 
        title="Cotizador de Seguros" 
        width="max-w-lg mx-auto" 
        headerColor="bg-indigo-600 text-white"
      >
        {/* Formulario de Seguro */}
        <InsuranceForm 
          setSummary={setSummary}
        />

        {/* Resumen de Cotizacion*/}
        <QuoteSummary
          data={data}
        />
        {/* Resultado de Cotizacion (totalizacion)*/}
        <QuoteResult
          quotation={quotation}
        />
      </Card>
    </Layout>
  </>
  )
}

export default App
