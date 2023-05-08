
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger={
    name:'Borja',
}

const passenger2: Passenger={
    name:'Eliza',
    children: ['Raúl','Mario'],
}

const printChildren= (passenger: Passenger):number=>{

    const howManyChildren= passenger.children?.length || 0;
    //const howManyChildren= passenger.children?.length;

    console.log(passenger.name,howManyChildren);
    return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);