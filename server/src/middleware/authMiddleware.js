import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];

  if (!token) {
    return res
      .status(401)
      .send({ message: 'A token is required for authorization.' });
  }

  try {
    token = token.replace(/^Bearer\s+/, '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
  } catch (error) {
    return res.status(401).send({ message: 'Token invalid.' });
  }

  return next();
};
