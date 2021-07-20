import isJSON from '@stdlib/assert-is-json/';
import CryptoJS from 'crypto-js';
import { Cipher } from 'js-cipher';

export enum cryptEnum {
  shift = 23,
}

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
    const plain = wordArray.toString(CryptoJS.enc.Utf8);
    if (isJSON(plain)) return JSON.parse(plain).str;
    return plain;
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

    // const { str } = JSON.parse(aesPlain);
    // return str;
    return aesPlain;
  }
}

export default new Crypt();
