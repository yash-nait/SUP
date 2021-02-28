const Component = require('../models/component-model')

createComponent = (req, res) => {
  const body = req.body

  if(!body){
    return res.status(400).json({
      success:false,
      error: 'You must provide a component'
    })
  }

  const component = new Component(body)

  console.log(body)

  if(!component){
    return res.status(400).json({
      success: false,
      error: err
    })
  }

  component
    .save()
    .then(()=>{
      return res.status(201).json({
        success: true,
        id: component._id,
        message: 'Component created!'
      })
    })
    .catch((error)=>{
      return res.status(400).json({
        error,
        message: 'Component not created!',
      })
    })
}

deleteComponent = async(req,res) => {
  await Component.findOneAndDelete({_id: req.params.id},(err, component) => {
    if(err){
      return res.status(400).json({ success: false, error: err })
    }
    if(!component){
      return res
        .status(404)
        .json({ success: false, error: `Component not found` })
    }
    return res.status(200).json({ success: true, data: component })
  }).catch(err => console.log(err))
}

getComponent = async (req,res) =>{
  await Component.find({},(err,components) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!components.length) {
      return res
      .status(404)
      .json({ success: false, error: `Movie not found` })
    }
    return res.status(200).json({ success: true, data: components })
  }).catch(err => console.log(err))
}

module.exports = {
  createComponent,
  deleteComponent,
  getComponent
}
