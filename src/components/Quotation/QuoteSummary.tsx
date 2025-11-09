import type { QuoteSummaryProps } from './quotation.type';

//Componente: Resumen de Cotizacion
const QuoteSummary = ({data}: QuoteSummaryProps) => {

    //Destructurar datos 
    const { brand, year, plan } = data;

    //Verificar que no esten vacios
    if(brand === '' || year === '' || plan === '') return null;

    return ( 
        <>
            <div className='bg-indigo-900 mt-4 rounded-lg'>
                <h2
                    className="text-lg font-extrabold leading-none 
                    tracking-tight text-white text-center p-4 uppercase"
                >
                    Resumen de Cotizacion
                </h2>
                <ul className='space-y-1 text-gray-100 list-disc list-inside p-4 capitalize'>
                    <li>
                        <span className='font-bold mr-2'>Plan:</span> 
                        <span className='font-medium '>{plan}</span>
                    </li>
                    <li>
                        <span className='font-bold mr-2'>Marca:</span> 
                        <span className='font-medium '>{brand}</span>
                    </li>
                    <li>
                        <span className='font-bold mr-2'>Año:</span> 
                        <span className='font-medium '>{year}</span>
                    </li>

                </ul>
            </div>
        </>
    );
}
 
export default QuoteSummary;