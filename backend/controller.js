const User = require('./User')

exports.get = async (req, res, next) => {
  try {
    const users = await User.find()

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        data: users,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

exports.add = async (req, res, next) => {
  try {
    const user = await User.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        data: user,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

exports.update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    console.log(err)
  }
}
