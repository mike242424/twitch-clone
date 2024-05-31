import bcrypt from 'bcryptjs';
import User from '../../models/User.js';

export const updatePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const { password, newPassword } = req.body;

    const user = await User.findById(userId, { password: 1 });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) {
      return res.status(400).send({ error: 'Invalid password.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      password: hashedPassword,
    });

    res.send({ message: 'Password updated successfully.' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
