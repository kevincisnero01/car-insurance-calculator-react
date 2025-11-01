import React,{useState} from 'react';
import Layout from './components/layout/Layout';
import InsuranceForm from './components/Insurance/InsuranceForm';
import Card from './components/common/Card';
import QuoteSummary from './components/Quotation/QuoteSummary';


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
  const { data } = summary;

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
      </Card>
    </Layout>
  </>
  )
}

export default App
