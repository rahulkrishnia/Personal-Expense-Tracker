const User = require('../models/User');

// @route   PUT api/user/budget
// @desc    Update user monthly budget
exports.updateBudget = async (req, res) => {
  try {
    const { monthlyBudget } = req.body;
    
    // Find user and update budget
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.monthlyBudget = Number(monthlyBudget) || 0;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
