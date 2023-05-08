
export interface Product {
    description:string;
    price:number;
}

const phone: Product={
    description: 'Noki A1',
    price: 150.0
}
const tablet: Product={
    description: 'Ipad air',
    price: 250.0
}

interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}

// function taxCalculation({tax,products}:TaxCalculationOptions):[number,number]{
export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    
    const{tax,products}=options;
    let total=0;
    
    products.forEach(({price}) => {
        total+=price;
    });
    
    return [total, total*tax];
}

// const shoppingCart= [phone, tablet];


// const [total, tax]= taxCalculation({
//     products:shoppingCart,
//     tax:0.15,
// })


// console.log('Total', total);
// console.log('Tax', tax);






export{};