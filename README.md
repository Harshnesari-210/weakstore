# WeakStoreJS 🚀

![npm](https://img.shields.io/npm/v/weakstorejs?color=brightgreen)
![npm downloads](https://img.shields.io/npm/dt/weakstorejs)
![License](https://img.shields.io/npm/l/weakstorejs)

A **lightweight library** to store **private data for objects** in JavaScript using `WeakMap`, supporting **multiple keys per object**.

---

## 🔹 Why WeakStoreJS?

JavaScript doesn’t have built-in private properties for plain objects. `WeakMap` can help, but its API can be verbose. **WeakStoreJS** simplifies this:

- Store multiple private keys per object easily.
- Automatically garbage-collected when objects are removed.
- Clean, intuitive API.
- Makes your code safer and easier to maintain.

---

## ⚡ Installation

```bash
npm install weakstorejs
```
```yarn
yarn add weakstorejs
```

## 🔹 API

| Method | Description |
|--------|-------------|
| `set(obj, key, value)` | Store a value for a specific object and key |
| `get(obj, key)` | Retrieve the value of a specific key |
| `has(obj, key)` | Check if a key exists for a specific object |
| `delete(obj, key)` | Remove a key from a specific object |
