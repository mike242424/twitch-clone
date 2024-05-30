import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import generateToken from '../../utils/generateJwtToken.js';

export const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(400).send({ error: 'Incorrect username or password.' });
    }

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) {
      return res.status(400).send({ error: 'Incorrect username or password.' });
    }

    const token = generateToken(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      '8h',
    );

    return res.send({
      userDetails: {
        username,
        email: user.email,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
