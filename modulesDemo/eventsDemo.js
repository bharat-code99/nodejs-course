import { EventEmitter } from "events";

const myEmmiter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function byeHandler(name) {
  console.log("Bye " + name);
}

// Register Event Listners
myEmmiter.on("greet", greetHandler);
myEmmiter.on("bye", byeHandler);

// Emit Events
myEmmiter.emit("greet", "John");
myEmmiter.emit("bye", "John");

// Error Handling
myEmmiter.on("error", (err) => {
  console.log("An Error Occured: ", err);
});

myEmmiter.emit("error", new Error("Something Went Wrong"));
