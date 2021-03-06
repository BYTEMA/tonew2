'use strict';

class ExpenseModel {
    constructor() {
        this._amount;
        this._code;
        this._pinCode;
        this._reporter;
        this._reporterId;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        this._amount = amount;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        this._code = code;
    }

    get pinCode() {
        return this._pinCode;
    }

    set pinCode(pinCode) {
        this._pinCode = pinCode;
    }

    get reporter() {
        return this._reporter;
    }

    set reporter(reporter) {
        this._reporter = reporter;
    }

    get reporterId() {
        return this._reporterId;
    }

    set reporterId(reporterId) {
        this._reporterId = reporterId;
    }
}

module.exports = ExpenseModel;
