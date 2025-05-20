const papa = require('papaparse')

class SheetApi {
    async loadSheet() {
        const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSi3-0T_WxjM5gmJq72CbUpY3qCH8JAMK9n4SWY4DlCdwPJk3SnpPRtSeO3QpFHY6HeiX1I1c1ZqyrQ/pub?output=csv', {
            method: 'GET',
        })
        const txt = await res.text()
        const { data, error, meta } = papa.parse(txt, { header: true, dynamicTyping: true })
        this.sheet = data
    }
    findMotoById(id) {
        let moto = this.sheet.filter(moto => moto.id == id)
        return moto
    }
    findAll() {
        return this.sheet
    }
}

module.exports = {SheetApi}