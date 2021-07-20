import CryptoJS from 'crypto-js';
import { Cipher } from 'js-cipher';

export enum CryptProps {}

export class Crypt {
  cipher: Cipher;
  secret: string;
  constructor() {
    this.cipher = new Cipher();
    this.secret = 'You Make My Dreams (Come True)';
  }

  private AES_ENCRYPT(message: string) {
    message = JSON.stringify({ str: message });
    const hash = CryptoJS.AES.encrypt(message, this.secret);

    return hash.toString();
  }

  private AES_DECRYPT(hash: string) {
    const wordArray = CryptoJS.AES.decrypt(hash, this.secret);

    return wordArray.toString(CryptoJS.enc.Utf8);
  }

  private CAESAR_ENCRYPT(message: string) {
    return this.cipher.encrypt(message, 23);
  }

  private CAESAR_DECRYPT(hash: string) {
    return this.cipher.decrypt(hash, 23);
  }

  public encrypt(message: string) {
    const aesHash = this.AES_ENCRYPT(message);
    const caesarCipher = this.CAESAR_ENCRYPT(aesHash);

    return caesarCipher;
  }

  public decrypt(hash: string) {
    const caesarPlain = this.CAESAR_DECRYPT(hash);
    const aesPlain = this.AES_DECRYPT(caesarPlain);

    const { str } = JSON.parse(aesPlain);
    return str;
  }
}

export default new Crypt();
