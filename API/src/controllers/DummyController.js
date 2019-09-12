const Dummy = require('../models/DummyModel')


// C

exports.create = async (req, res) => {
    const dum = Dummy(req.body)
    try {
        await dum.save();
        res.json({ mensaje: 'Se agregó un nuevo cliente', ...req.body });
    } catch (error) {
        console.log("error on create", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Dummy.find({});
        res.json(data);
    } catch (error) {
        console.log("error on dummy raed", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Dummy.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            // {
            //     $set: { ...req.body }
            // },
            { new: true },
            (err, dum) =>
                res.json({ document: dum, body: req.body })
        );
    } catch (err) {
        console.log(err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Dummy.remove({ id: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{

    }

}
