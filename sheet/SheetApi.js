const papa = require('papaparse')

class SheetApi{
    loadSheet(){
        fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSi3-0T_WxjM5gmJq72CbUpY3qCH8JAMK9n4SWY4DlCdwPJk3SnpPRtSeO3QpFHY6HeiX1I1c1ZqyrQ/pub?output=csv', {
            method: 'GET',
        })
        .then((res)=>{
            res.text()
            .then((res)=>{
                const {data, error, meta} = papa.parse(res, {header: true, dynamicTyping: true})
                this.sheet = data
            })
        })   
    }
    findMotoById(id){
        let moto = this.sheet.filter(moto => moto.id == id)
        return moto
    }
    findAll(){
        return this.sheet
    }
}

module.exports = {
    SheetApi
}