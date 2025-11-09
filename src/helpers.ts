/**
 * Obtiene la diferencia de años
 * @param year - El año seleccionado por el usuario
 * @returns La diferencia en años desde el año actual
 */
export function getYearDifference(year: string): number {
    return new Date().getFullYear() - Number(year);
}

/**
 * Calcula el incremento basado en la marca del vehículo
 * @param brand - La marca seleccionada ('europeo', 'americano', 'asiatico')
 * @returns El factor de incremento numérico
 */
export function calculateBrand(brand: string): number {
    let increment: number;

    switch (brand) {
        case 'europeo':
            increment = 1.30;
            break;
        case 'americano':
            increment = 1.15;
            break;
        case 'asiatico':
            increment = 1.05;
            break;
        default:
            increment = 1; // Valor por defecto para no afectar el cálculo
            break;
    }

    return increment;
}

/**
 * Obtiene el factor de incremento basado en el plan seleccionado
 * @param plan - El plan seleccionado ('basic' o 'complete')
 * @returns El factor de incremento numérico
 */
export function getPlan(plan: string): number {
    // Si el plan es básico, se incrementa un 20%, si es completo, un 50%
    return (plan === 'basic') ? 1.20 : 1.50;
}