const papa = require('papaparse')

class SheetApi {
    constructor() {
        this.sheet = null;
    }

    async loadSheet() {
        const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSi3-0T_WxjM5gmJq72CbUpY3qCH8JAMK9n4SWY4DlCdwPJk3SnpPRtSeO3QpFHY6HeiX1I1c1ZqyrQ/pub?output=csv', {
            method: 'GET',
        });
        const txt = await res.text();
        const { data } = papa.parse(txt, { header: true, dynamicTyping: true });
        this.sheet = data;
    }

    async findMotoById(id) {
        if (!this.sheet) await this.loadSheet();
        return this.sheet.filter(moto => moto.id == id);
    }

    async findAll() {
        if (!this.sheet) await this.loadSheet();
        return this.sheet;
    }
}

module.exports = SheetApi