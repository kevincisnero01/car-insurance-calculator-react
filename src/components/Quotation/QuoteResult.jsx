import React from 'react';

//Componente: Resultado de Cotizacion
const QuoteResult = ({quotation}) => {
    return ( 
    <>
        
        { quotation === 0 ?
        <div className='bg-cyan-200 border border-cyan-500 rounded-md p-3 my-2'>
            <p>Elige marca, año y tipo de segunro.</p>
        </div>
        :
        <div className='bg-indigo-200 border border-indigo-500 rounded-md p-3 my-2'>
            <p className='font-medium'>El total es $ <span className='font-bold text-indigo-900'>{quotation}</span></p>
        </div>
        }
        
    </>
    );
}
 
export default QuoteResult;