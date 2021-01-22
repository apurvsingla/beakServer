const Fan = require('../models/fan');
const Lamp = require('../models/lamp');
const Piano = require('../models/piano');

const wrapperForPageData = (Model) => (req, res) => {
    try {
        const body = req.body;
        const data = new Model(body);
        if(!data) return res.status(400).json({success: false, error: err});
        data.save().then(() => {
            return res.status(201).json({
                success: true,
                message: "saved",
                id: data._id,
                data: data
            })
        })
    } catch (err) {
        return res.status(400).json({
            err,
            message: `error in creating the ${Model} project`
        })
    }
  };



const wrapperForDataRender = (Model) => (req,res) => {
    try {
        Model.find({}).then((data) => {
            return res.send(data);
        })
    } catch (err) {
        return res.status(404).json(err);
    }
}  

module.exports.fanController = wrapperForPageData(Fan);
module.exports.lampController = wrapperForPageData(Lamp);
module.exports.pianoController = wrapperForPageData(Piano);


module.exports.fanDataController = wrapperForDataRender(Fan);
module.exports.lampDataController = wrapperForDataRender(Lamp);
module.exports.pianoDataController = wrapperForDataRender(Piano);

// module.exports.delete = async (req,res) => {
//     const sand = await Sandbox.findById({_id: req.params.id});
//     if(sand){
//         sand.remove();
//         return res.status(201).json({
//             message: 'Deleted Sucessfully'
//         })
//     }
// }