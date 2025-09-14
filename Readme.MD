# WeakStore

A lightweight library for storing **private data for objects** using `WeakMap`.

---

## Why WeakStore?

In JavaScript, objects do not have built-in private fields (unless using classes with `#private`).  
Sometimes you want to attach sensitive or hidden data to an object **without exposing it publicly**.  

WeakStore solves this by:

- Safely storing multiple "private keys" per object.
- Ensuring memory safety (data is automatically garbage collected when objects are gone).
- Simplifying the use of `WeakMap` with a clean and easy API.
- Making your code cleaner and easier to maintain.

---

## Installation

```bash
npm install weakstore
```
