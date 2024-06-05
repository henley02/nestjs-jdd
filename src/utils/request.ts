// eslint-disable-next-line @typescript-eslint/no-var-requires
const CryptoJS = require('crypto-js');

export const KEY = '';
export const IV = '';

export const encryption = (pm: any) => {
  const key = CryptoJS.enc.Utf8.parse(KEY);
  const iv = CryptoJS.enc.Utf8.parse(IV);
  const params = JSON.stringify(pm);
  const srcs = CryptoJS.enc.Utf8.parse(params);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const res = encodeURI(CryptoJS.enc.Base64.stringify(encrypted.ciphertext));
  // .replace(/\+/g, '%2B');
  return res;
};

export function decryption(cipher: string) {
  debugger;
  const base64 = decodeURI(cipher).replace(/%2B/g, '+');
  const key = CryptoJS.enc.Utf8.parse(KEY);
  const iv = CryptoJS.enc.Utf8.parse(IV);
  const decrypted = CryptoJS.AES.decrypt(base64, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
