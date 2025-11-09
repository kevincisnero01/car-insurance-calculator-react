// Representa los datos anidados como marca, año y tipo de plan(basico o completo)
export interface InsuranceData {
    brand: string;
    year: string;
    plan: string;
}

// Representa el resumen final de la cotización y los datos utilizados
export interface QuotationSummary {
    quotation: number;  //cotizacion
    data: InsuranceData; 
}

// Representa las PROPS que recibe el componente QuoteSummary
export interface QuoteSummaryProps {
    data: InsuranceData; 
}

// Representa las PROPS que recibe el componente QuoteResult
export interface QuoteResultProps {
    quotation: number; 
}

export interface InsuranceFormProps {
    // 1. Tipado de setSummary (Función que recibe un objeto QuotationSummary y devuelve NADA (void))
    setSummary: (summary: QuotationSummary) => void; 
    // 2. Tipado de setIsLoading (Función que recibe un booleano y devuelve NADA (void))
    setIsLoading: (loading: boolean) => void;
}