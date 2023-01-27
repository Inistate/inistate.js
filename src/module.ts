import { Inistate } from ".";
import { Listing } from "./listing";

export class Module {
    readonly _inistate: Inistate;
    readonly _name: String;

    constructor(inistate: Inistate, name: String) {
        this._inistate = inistate;
        this._name = name;
    }

    listing(listing: String) : Listing {
        return new Listing();
    }

    async list(listing: ListingModel = {}) {
        this._inistate.list(this);
        // this._inistate.requestModule(this._name);
    }



    
    //listing

}

//canvas

export interface ListingModel {
    name?: String,
    pageSize?: Number,
    page?: Number
}
