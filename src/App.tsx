import React,{useState} from 'react';
import Layout from './components/layout/Layout';
import InsuranceForm from './components/Insurance/InsuranceForm';
import Card from './components/common/Card';
import QuoteSummary from './components/Quotation/QuoteSummary';
import QuoteResult from './components/Quotation/QuoteResult';
import Spinner from "./components/common/Spinner";


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

  //Para manejar el spinner
  const [isLoading, setIsLoading] = useState(false);

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
          setIsLoading={setIsLoading}
        />

        {/* Componente de estado de carga */}
        { isLoading ? <Spinner/> : null } 
        

        {/* Resumen de Cotizacion*/}
        { !isLoading ? <QuoteSummary data={data} />: null  }

        {/* Resultado de Cotizacion (totalizacion)*/}
        { !isLoading ?  <QuoteResult quotation={quotation} /> : null  }

      </Card>
    </Layout>
  </>
  )
}

export default App
