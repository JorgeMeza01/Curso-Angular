export interface Product {
    description:string;
    price:number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
} 


const tablet: Product ={
    description: "¡Pad Air",
    price: 250.0
} 


interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}


// function taxCalculation(options:TaxCalculationOptions ): [number, number]{
// function taxCalculation({tax,products}:TaxCalculationOptions ): [number, number]{
export function taxCalculation(options:TaxCalculationOptions ): [number, number]{
    
    const {tax,products} = options;

    let total = 0;

    products.forEach(({price}) => {
        // total = total + product.price;
        // const {price} = product; 
        // total += product.price;
        total += price;
    });

    // const {tax} = options;
    // return [total, total * options.tax];
    return [total, total * tax];
}


// const shoppingCart = [phone, tablet];
// const tax = 0.15;


// const [totalResult, taxResult] = taxCalculation({
//     products: shoppingCart,
//     tax,
// });


// console.log('Total',totalResult);
// console.log('Tax', taxResult);









// export {};