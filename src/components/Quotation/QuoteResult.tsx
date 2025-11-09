import  { useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import type { QuoteResultProps } from './quotation.type';

//Componente: Resultado de Cotizacion
const QuoteResult = ({quotation}: QuoteResultProps) => {
    const nodeRef = useRef(null);
    return ( 
    <>
        { quotation === 0 ? (
        <div className='bg-cyan-200 border border-cyan-500 rounded-md p-3 my-2'>
            <p>Elige marca, año y tipo de segunro.</p>
        </div>
        ):(
        <div className='resultado bg-indigo-200 border border-indigo-500 rounded-md p-3 my-2 text-center relative'>
            <TransitionGroup component={null}>
                <CSSTransition
                    nodeRef={nodeRef}
                    key={quotation}
                    classNames="resultado"
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <p ref={nodeRef} className='font-medium'>
                        El total es: <span className='font-bold text-indigo-900'>${quotation.toFixed(2)}</span>
                    </p>
                </CSSTransition>
            </TransitionGroup>
        </div>
        ) }
        
    </>
    );
}
 
export default QuoteResult;