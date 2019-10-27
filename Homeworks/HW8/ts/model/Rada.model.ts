import {Human} from './Human.model'
import {Deputy} from './Deputy.model'
import {Fraction} from './Fraction.model'

export class Rada {
        fraction_list:  Array<Fraction> = [];


    constructor(fraction_list: Array<Fraction>) {
        this.fraction_list = fraction_list;
    }
}

function addFraction(newFraction : Fraction) {
    this.fraction_list.push(newFraction)
}

function deleteFraction(fractionName : Fraction) {
    const deleteFraction = this.fraction_list.findIndex((fraction: Fraction) => {
        return fraction === fractionName
    });

    this.fraction_list.splice(deleteFraction, 0)
}

function showAllFractions() {
    console.log(this.fraction_list);
}

function showSomeFraction(fractionName: string) {
    const foundFraction = this.fraction_list.find((fraction: Fraction) => fraction.fraction_name === fractionName);
    console.log(foundFraction);
}