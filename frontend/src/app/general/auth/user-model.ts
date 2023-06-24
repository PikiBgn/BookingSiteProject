export class User {

    constructor(public email: string, private _token: string, private _tokenExpirationDate: Date, private _lastLoggedDatetime: number) {
    }
}