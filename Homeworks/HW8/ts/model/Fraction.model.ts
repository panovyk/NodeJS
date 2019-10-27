import {Deputy} from './Deputy.model'

export class Fraction {
    deputy_list: Deputy[] = [];
    fraction_name: string;

    constructor(deputy_list: [], fraction_name: string) {
        this.deputy_list = deputy_list;
        this.fraction_name = fraction_name;
    }
}

function addDeputy(newDeputy: Deputy) {
    this.deputy_list.push(newDeputy)
}

function deleteDeputy(deputyName: Deputy) {
    const deleteDeputy = this.deputy_list.findIndex((deputy: Deputy) => {
        return deputy === deputyName
    });

    this.deputy_list.splice(deleteDeputy, 0)
}

function delAllBribeTakers() {
    const bribe_takers = this.deputy_list.filter(deputy => {
        return deputy.bribe_taker
    });

    this.deputy_list.splice(0, this.length);
    this.deputy_list = [...bribe_takers];

    console.log(bribe_takers);
}

function biggestBribeTaker() {
    const [biggest_bribe] = this.deputy_list.map(bribe => {
        return bribe.bribe_size;
    });

    const max_bribe = Math.max(biggest_bribe);
    const biggestBribeTaker = this.deputy_list.find((deputy: Deputy) => {
        return deputy.bribe_size == max_bribe;
    });

    console.log(biggestBribeTaker);
}

function showAllDeputy() {
    console.log(this.deputy_list);
}

function deleteAllDeputies() {
    this.deputy_list.splice(0, this.deputy_list.length)
}

function allBribesSum() {
    const bribe_list = this.deputy_arr.map((bribe) => {
        return bribe.bribe_size;
    });

    console.log(bribe_list.reduce((a, b) => {
        return a + b
    }))
}