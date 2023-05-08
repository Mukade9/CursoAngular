
interface AudioPlayer{
    audioVolume : number;
    songDuration : number;
    song : string;
    details: Details;
}

interface Details{
    author: string;
    year:number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song ='New Song';
const {song:anotherSong, songDuration:duration, details:detalles} = audioPlayer;
const {author:autor}=detalles;

// console.log('Song: ', anotherSong);
// console.log('Song: ', duration);
// console.log('Author: ', autor);

const [,,trunks='Not found']: string[]=['Goku', 'Vegeta'];


console.log('Personaje 3: ',trunks);
export {}