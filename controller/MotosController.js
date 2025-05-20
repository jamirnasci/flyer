const SheetApi = require("../sheet/sheetapi")

const sheet = new SheetApi()
sheet.loadSheet()

exports.Motos = async (req, res)=>{
    const motos = await sheet.findAll()
    res.render('motos', {motos, isBack: true})
}

exports.Details = async (req, res)=>{
    const id = req.params.id
    const moto = await sheet.findMotoById(id)[0]
    const back = 'd-block'
    res.render('detalhes', {moto,  isBack: true})
}