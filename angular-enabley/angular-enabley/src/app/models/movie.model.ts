export class Movie{
    name!:string;
    year!:number;
}

function test(m:Movie){
    alert(m.name);
}


let m = new Movie();
m.name = 'Aba Ganuv';
m.year = 1980;

test(m);
test({name:'Ima Gnuva',year: 1977})

// export interface Movie{
//     mName!:string = '';
//     year!:number ='';
// }