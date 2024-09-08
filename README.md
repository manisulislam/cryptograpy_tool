# RSA Web Cryptography Tool

This project is a **Web-based RSA Cryptography Tool** built using React and the Web Crypto API. It allows users to generate RSA key pairs, encrypt messages with the public key, and decrypt them with the private key.

---

## Table of Contents
1. [Objective](#objective)
2. [Key Requirements](#key-requirements)
3. [User Interface](#user-interface)
4. [Core Documentation](#core-documentation)
5. [Time Complexity Analysis](#time-complexity-analysis)
6. [Tools](#tools)
7. [Discussion / Outcome](#discussion-outcome)

---

## Objective

The goal of this project is to create a simple yet functional web tool that demonstrates the core principles of **RSA encryption and decryption**. The tool provides a user-friendly interface for generating RSA key pairs, encrypting messages, and decrypting them back to their original form. It serves both as an educational platform and a practical utility.

### Key Highlights:
- **Educational Use**: Ideal for students and developers learning cryptography.
- **Practical Utility**: Demonstrates how RSA can be used in real-world applications.

---

## Key Requirements

To run this project successfully, you'll need the following:

- **Web Browser**: Any modern browser that supports the Web Crypto API (e.g., Chrome, Firefox, Edge).
- **React**: The project is built with React; basic React knowledge is needed.
- **Tailwind CSS**: For the UI, understanding Tailwind CSS is helpful for customization.
- **Node.js & npm**: Required to run and build the project locally.

---

## User Interface

The user interface is simple and intuitive. It features:

1. **Navbar**: For consistent navigation.
2. **Key Generation Section**: Generate and display RSA keys.
3. **Message Input Section**: Text area to input messages for encryption.
4. **Encryption/Decryption**: Buttons to encrypt and decrypt messages.
5. **Team Section**: A section acknowledging contributors.

The app is responsive and uses **Tailwind CSS** to ensure a clean and consistent layout across all devices.

---

## Core Documentation

### Key Generation
The app uses the **Web Crypto API** to generate RSA keys. It generates:
- **Public Key**: Used to encrypt messages.
- **Private Key**: Used to decrypt messages.

### Encryption
The message is encrypted using the **public key**. The encryption algorithm used is **RSA-OAEP** with `SHA-256`.

### Decryption
The message is decrypted using the **private key**. It reverts the encrypted message back to its original form.

### Base64 Encoding
To display the keys and messages, **Base64 encoding** is used to convert `ArrayBuffers` into readable strings.

---

## Time Complexity Analysis

1. **Key Generation**: The RSA key generation process has a time complexity of **O(n³)** due to prime factorization.
2. **Encryption/Decryption**: Both encryption and decryption have a time complexity of **O(n²)**.
3. **Base64 Encoding/Decoding**: This process has a time complexity of **O(n)**.

---

## Tools

- **React**: Used to build the UI and manage application state.
- **Web Crypto API**: Performs cryptographic operations such as RSA key generation, encryption, and decryption.
- **Tailwind CSS**: A utility-first CSS framework for building responsive designs.
- **TextEncoder/TextDecoder**: Converts strings to `Uint8Array` for encryption and back to strings after decryption.
- **Base64 Encoding**: Converts encrypted messages and keys to/from a readable format.

---

## Discussion / Outcome

### Discussion
This project showcases how RSA cryptography works within a web browser. It highlights the use of the Web Crypto API, which allows for secure client-side cryptographic operations without relying on external libraries.

- **Security Considerations**: While RSA is secure, this demo doesn't cover advanced features like key storage or cryptographic padding (e.g., PKCS1). For production use, these aspects should be handled more carefully.
- **Scalability**: RSA is not designed for encrypting large amounts of data. This project demonstrates small message encryption; real-world applications often use hybrid encryption.

### Outcome
This tool effectively demonstrates RSA encryption and decryption, providing a hands-on learning experience for cryptography enthusiasts. It can be expanded with more features like **hybrid encryption** or **digital signatures**.

---
