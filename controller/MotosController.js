const { SheetApi } = require("../sheet/sheetapi")

const sheet = new SheetApi()
sheet.loadSheet()

exports.Motos = (req, res)=>{
    const motos = sheet.findAll()
    res.render('motos', {motos, isBack: true})
}

exports.Details = (req, res)=>{
    const id = req.params.id
    const moto = sheet.findMotoById(id)[0]
    const back = 'd-block'
    res.render('detalhes', {moto,  isBack: true})
}