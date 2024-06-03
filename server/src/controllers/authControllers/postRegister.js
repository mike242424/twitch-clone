import User from '../../models/User.js';
import Channel from '../../models/Channel.js';
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
      email: email.toLowerCase,
    });

    if (duplicateEmail) {
      return res.status(409).send({ error: 'Email already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newChannel = await Channel.create({});

    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      channel: newChannel._id,
    });

    newChannel.userId = newUser._id;
    await newChannel.save();

    const token = generateToken(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET_KEY,
      '8h',
    );

    return res.status(201).send({
      userDetails: {
        username,
        email: newUser.email,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
