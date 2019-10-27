import {Human} from './Human.model'

 export class Deputy extends Human {
    age: number;
    firstname: string;
    lastname: string;
    bribe_taker: boolean;
    bribe_size: number;

    constructor(weight: number, height: number, firstname: string, lastname: string, age: number, bribe_taker: boolean, bribe_size: number) {
        super(weight, height);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.bribe_taker = bribe_taker;
        this.bribe_size = bribe_size;
    }

    give_a_bribe() {
        if (this.bribe_taker && bribe_size < 100 && 100000) {
            console.log('Oooookay, i will take it');
            return
        } else if (!this.bribe_taker || bribe_size <= 100000) {
            console.log('No no no thx');
            return;
        } else {
            console.log('Get out');
        }
    }
}

const bribe_size = Math.random();