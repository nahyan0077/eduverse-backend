import crypto from 'crypto'

export const generateOTP = () => {
    const buffer = crypto.randomBytes(3);
    const otp = `${(parseInt(buffer.toString('hex'), 16) % 1000000)}`.padStart(6, '0');
    return otp;
}