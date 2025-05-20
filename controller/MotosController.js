const {SheetApi} = require('../sheet/sheetapi')

const sheet = new SheetApi();

export async function Motos(req, res) {
    if (!sheet.sheet) await sheet.loadSheet(); // garante que os dados estão carregados
    const motos = sheet.findAll();
    res.render('motos', { motos, isBack: true });
}

export async function Details(req, res) {
    if (!sheet.sheet) await sheet.loadSheet(); // garante que os dados estão carregados
    const id = req.params.id;
    const moto = sheet.findMotoById(id)[0];
    res.render('detalhes', { moto, isBack: true });
}
