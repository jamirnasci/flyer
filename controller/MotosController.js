const SheetApi = require("../sheet/sheetapi");


const sheet = new SheetApi();

exports.Motos = async (req, res) => {
    if (!sheet.sheet) await sheet.loadSheet(); // garante que os dados estão carregados
    const motos = sheet.findAll();
    res.render('motos', { motos, isBack: true });
};

exports.Details = async (req, res) => {
    if (!sheet.sheet) await sheet.loadSheet(); // garante que os dados estão carregados
    const id = req.params.id;
    const moto = sheet.findMotoById(id)[0];
    res.render('detalhes', { moto, isBack: true });
};
