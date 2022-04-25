const Item = require('../models/item');

createItem = (req, res) => {
  const body = req.body;

  if(!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item.'
    })
  }

  const item = new Item(body);

  if (!item) {
    return res.status(400).json({ success: false, error: err})
  }

  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item created! Thank you:)'
      })
    })
    .catch(err => {
      return res.status(400).json({
        err,
        message: 'Item not created! Thank you:('
      })
    })
}

updateItem = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item to update:('
    })
  }
  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({
        err,
        message: 'Item not found!:('
      })
    }
    item.name = body.name;
    item.quantity = body.quantity;
    item.description = body.description;
    item
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: item._id,
          message: 'Item updated!:)'
        })
      })
      .catch(err => {
        return res.status(404).json({
          err,
          message: 'Item not updated!:('
        })
      })
  })
}

deleteItem = async (req, res) => {
  Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) { 
      return res.status(400).json({
        success:false,
        error: err
      })
    }
    if (!item) {
      return res.status(404).json({
        success: false, error: 'Item not found'
      })
    }

    return res.status(200).json({ success: true, data: item})
  }).catch(err => console.log(err))
}

getItemById = async (req, res) => {
  Item.findOneAndDelete({_id: req.params.id}, (err, item) =>{
    if (err) {
      return res.status(400).json({ success: false, error: err})
    }

    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: 'Item not found!:('})
    }
    return res.status(200).json({success: true, data: item})
  }).catch(err => console.log(err))
}

getItems = async (req,res) => {
  Item.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err})
    }
    if (!items.length) {
      return res
        .status(404)
        .json({ success: false, error: 'Item not found!:(' })
    }
    return res
    .status(200)
    .json({success: true, data: items})
  }).catch(err => console.log(err))
}

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getItemById,
  getItems
}
