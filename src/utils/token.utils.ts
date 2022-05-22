import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

const generateToken = ({ email, username }: Partial<User>): string =>
  jwt.sign({ email, username }, process.env.JWT_SECRET || 'superSecret', { expiresIn: '60d' });

export default generateToken;
