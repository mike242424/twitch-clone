import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import generateToken from '../../utils/generateJwtToken.js';

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const duplicateUsername = await User.exists({
      username,
    });

    if (duplicateUsername) {
      return res.status(409).send({ error: 'Username already in use.' });
    }

    const duplicateEmail = await User.exists({
      email: email.toLowerCase(),
    });

    if (duplicateEmail) {
      return res.status(409).send({ error: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const token = generateToken(
      { userId: newUser._id, email },
      process.env.JWT_SECRET_KEY,
      '8h',
    );

    return res.status(201).send({
      userDetails: {
        username,
        email,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
