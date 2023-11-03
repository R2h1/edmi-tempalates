import crypto from 'crypto';

export default (value: string): string => {
  // prefix 请自定义
  return crypto.createHash('md5').update(`prefix${value}`).digest('hex');
};
