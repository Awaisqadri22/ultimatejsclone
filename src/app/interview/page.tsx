"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    title: "What is closure in JavaScript?",
    answer: `A closure is the combination of a function bundled together with references to its surrounding state.
              It gives you access to an outer function's scope from an inner function.`,
    solution: `You can create closures by defining a function inside another function and returning it.`,
  },
  {
    id: 2,
    title: "What is the event loop?",
    answer: `The event loop is a programming construct that waits for and dispatches events in a program.
              It works by making a request to some internal or external "event provider" and then calls
              the relevant event handler.`,
    solution: `The event loop allows JavaScript to perform non-blocking I/O operations by using callbacks and promises.`,
  },
  {
    id: 3,
    title: "What is the difference between '==' and '==='?",
    answer: `The '==' operator checks for value equality with type coercion, while '===' checks for both value and type equality.`,
    solution: `Use '===' to avoid unexpected results due to type coercion.`,
  },
  {
    id: 4,
    title: "What are promises in JavaScript?",
    answer: `Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.`,
    solution: `You can create a promise using the Promise constructor and handle it with .then() and .catch() methods.`,
  },
  {
    id: 5,
    title: "What is the purpose of 'async' and 'await'?",
    answer: `The 'async' keyword is used to declare an asynchronous function, and 'await' is used to pause the execution until the promise is resolved.`,
    solution: `Use 'async' before a function declaration and 'await' before a promise to handle asynchronous code more easily.`,
  },
  {
    id: 6,
    title: "What is the 'this' keyword in JavaScript?",
    answer: `The 'this' keyword refers to the context in which a function is called, which can vary depending on how the function is invoked.`,
    solution: `Use arrow functions to maintain the context of 'this' from the enclosing scope.`,
  },
  {
    id: 7,
    title: "What is event delegation?",
    answer: `Event delegation is a technique that allows you to attach a single event listener to a parent element to manage events for multiple child elements.`,
    solution: `This improves performance and simplifies event management in dynamic lists.`,
  },
];

export default function InterviewPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Interview Questions</h2>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="mb-2">
              <button
                className="text-left w-full hover:bg-gray-700 p-2 rounded transform transition-transform duration-300 hover:rotate-2 hover:scale-105"
                onClick={() => setSelectedQuestion(question)}
              >
                {question.title}
              </button>
            </li>
          ))}
        </ul>
        <Link href="/">
          <button className="mt-4 bg-blue-500 px-4 py-2 rounded w-full">
            GO BACK
          </button>
        </Link>
      </aside>

      <main className="w-3/4 p-8">
        <h1 className="text-2xl font-bold mb-4">{selectedQuestion.title}</h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Visualization:</h2>
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
            <p>{selectedQuestion.answer}</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Solution:</h2>
          <div className="bg-gray-100 p-4 rounded-md border border-gray-300">
            <p>{selectedQuestion.solution}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Rate this question:</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              👍
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              👎
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
