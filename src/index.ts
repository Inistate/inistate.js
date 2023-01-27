import { Module } from './module';
import axios from "axios";

export class Inistate {
    readonly _apiKey: String;
    readonly _workspace: String;
    readonly _endpoint: String;
    private workspace?: Object;

    constructor(opts: InistateOptions = {}) {
        this._endpoint = opts.endpoint || 'https://api.inistate.com';
        this._apiKey = opts.apiKey || '';
        this._workspace = opts.workspace || '';
    }

    module(moduleName: String): Module {
        return new Module(this, moduleName);
    }

    async request() {
        if (this.workspace == null) {
            const requestConfig = {
                baseURL: this._endpoint
            };

            let client = axios.create({
                baseURL: this._endpoint.toString(),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "fsk  " + this._apiKey,
                },
            });

            client.defaults.headers['workspace'] = this._workspace.toString();

            let result = await client.get('/api/workspace/0');
            this.workspace = result.data;
        }

        return this.workspace;

    }

    async list(module: Module) {
        const requestConfig = {
            baseURL: this._endpoint
        };

        let client = axios.create({
            baseURL: this._endpoint.toString(),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "fsk  " + this._apiKey,
            },
        });

        client.defaults.headers['workspace'] = this._workspace.toString();

        let result = await client.post('/api/workspace/list', {
            listing: '',
            module: module._name
        });

        console.log(result.data);

        return result.data;
    }
}

export interface InistateOptions {
    endpoint?: String,
    apiKey?: String,
    workspace?: String
}





