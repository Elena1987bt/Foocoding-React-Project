const User = require('./userModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
  try {
    const user = await User.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 12),
    });
    user.save();

    res.status(200).json({ status: 'success', data: user });
  } catch (err) {
    res.status(404).json({ status: 'fail', data: err });
  }
};

exports.login = async (req, res, next) => {
  try {
    // 1. Find user by email
    const user = await User.findOne({ email: req.body.email });
    // 2. Check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'No user with that email' });
    }
    // 3. Check if password match
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(200).json({
        status: 'success',
        message: 'User Authenticated!',
        user: user.email,
      });
    } else {
      return res
        .status(404)
        .json({ status: 'fail', message: 'No user with that email' });
    }
  } catch (err) {
    res.status(404).json({ status: 'fail', data: err });
  }
};
