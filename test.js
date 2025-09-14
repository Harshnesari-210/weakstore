import createPrivateStore from "./index.js";
const privateStore = createPrivateStore();

const user = { name: 'Harsh' };

// Set values
privateStore.set(user, 'creditCard', '1234-5678-9012-3456');
privateStore.set(user, 'pin', '4321');

// Get values
console.log(privateStore.get(user, 'creditCard')); // 1234-5678-9012-3456
console.log(privateStore.get(user, 'pin'));        // 4321

// Check existence
console.log(privateStore.has(user, 'pin'));        // true
console.log(privateStore.has(user, 'password'));   // false

// Delete value
privateStore.delete(user, 'pin');
console.log(privateStore.has(user, 'pin'));        // false
