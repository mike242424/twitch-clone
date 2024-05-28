import jwt from 'jsonwebtoken';

export default function generateToken(payload, secretKey, expiresIn = '1h') {
  return jwt.sign(payload, secretKey, { expiresIn });
}
