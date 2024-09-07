import { useState } from "react";
import Team from "./components/Team/Team";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  // Generate RSA keys using Web Crypto API
  const generateKeys = async () => {
    try {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
      );

      const publicKeyExported = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
      const privateKeyExported = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

      // Convert to base64 strings for display purposes
      setPublicKey(arrayBufferToBase64(publicKeyExported));
      setPrivateKey(arrayBufferToBase64(privateKeyExported));
    } catch (error) {
      console.error("Key generation error:", error);
    }
  };

  // Encrypt message using public key
  const encryptMessage = async () => {
    try {
      const publicKeyArrayBuffer = base64ToArrayBuffer(publicKey);
      const publicKeyObj = await window.crypto.subtle.importKey(
        "spki",
        publicKeyArrayBuffer,
        {
          name: "RSA-OAEP",
          hash: "SHA-256",
        },
        true,
        ["encrypt"]
      );

      const encoder = new TextEncoder();
      const messageArray = encoder.encode(message); // Convert string to Uint8Array

      const encrypted = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKeyObj,
        messageArray
      );

      setEncryptedMessage(arrayBufferToBase64(encrypted)); // Convert ArrayBuffer to base64 string
    } catch (error) {
      console.error("Encryption error:", error);
    }
  };

  // Decrypt message using private key
  const decryptMessage = async () => {
    try {
      const privateKeyArrayBuffer = base64ToArrayBuffer(privateKey);
      const privateKeyObj = await window.crypto.subtle.importKey(
        "pkcs8",
        privateKeyArrayBuffer,
        {
          name: "RSA-OAEP",
          hash: "SHA-256",
        },
        true,
        ["decrypt"]
      );

      const encryptedArray = base64ToArrayBuffer(encryptedMessage);

      const decrypted = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKeyObj,
        encryptedArray
      );

      const decoder = new TextDecoder();
      setDecryptedMessage(decoder.decode(decrypted)); // Convert decrypted ArrayBuffer to string
    } catch (error) {
      console.error("Decryption error:", error);
    }
  };

  // Helper: Convert ArrayBuffer to Base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  // Helper: Convert Base64 to ArrayBuffer
  const base64ToArrayBuffer = (base64) => {
    const binary_string = window.atob(base64);
    const len = binary_string.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  };

  return (

   <>
    {/* navbar start */}
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">RSA Web Cryptography Tool</h1>
      <p className="font-bold mb-6">First click the generate RSA Keys and then press  Encrypt Message <br/>and finally press Decrypt Message</p>
      <div className="space-y-4 w-full max-w-lg">
        {/* Generate Keys Section */}
        <button
          onClick={generateKeys}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Generate RSA Keys
        </button>
        {publicKey && (
          <>
            <textarea
              value={publicKey}
              readOnly
              className="w-full p-2 bg-white border rounded"
              placeholder="Public Key"
              rows="4"
            />
            <textarea
              value={privateKey}
              readOnly
              className="w-full p-2 bg-white border rounded"
              placeholder="Private Key"
              rows="4"
            />
          </>
        )}

        {/* Message Input */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 bg-white border rounded"
          placeholder="Enter your message"
          rows="3"
        />

        {/* Encrypt/Decrypt Buttons */}
        <button
          onClick={encryptMessage}
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          Encrypt Message
        </button>
        {encryptedMessage && (
          <textarea
            value={encryptedMessage}
            readOnly
            className="w-full p-2 bg-gray-200 border rounded"
            placeholder="Encrypted Message"
            rows="3"
          />
        )}
        <button
          onClick={decryptMessage}
          className="bg-yellow-500 text-white p-2 rounded w-full"
        >
          Decrypt Message
        </button>
        {decryptedMessage && (
          <textarea
            value={decryptedMessage}
            readOnly
            className="w-full p-2 bg-gray-200 border rounded"
            placeholder="Decrypted Message"
            rows="3"
          />
        )}
      </div>
    </div>

    {/* team contrubution people */}
    <Team/>
   </>

    
    
  );
};

export default App;
