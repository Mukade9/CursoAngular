
const skills: string[]= ['Bash','Counter','Healing'];

interface Character{
    name:string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Strider: Character={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

Strider.hometown='Rivendell';

console.table(Strider)

export {};