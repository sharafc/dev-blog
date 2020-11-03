---
title: Temporal Dead Zone in JavaScript
date: 2020-10-30
publishdate: 2020-11-02
draft: false
description: An explanation of the Temporal Deadzone (TDZ) in JavaScript
tags:
  - JavaScript
  - TDZ
  - Temporal Dead Zone
---

While digging deeper into the concepts of ES6, I stumbled across the term "Temporal Dead Zone". I was curious and found out that I was unknowing of the term itself, but knew the concept of it. I didn't run into the issues too often, but it is absolutely helpful to know why it occurs and how to avoid it. So follow me on my journey through the Temporal Dead Zone.
<!-- more -->

<figure>
    <img src="/src/img/temporal_dead_zone.jpg" alt="" title="The Temporal Dead Zone in JavaScript">
</figure>

To get it right off the bat:

<blockquote>
    <p>The Temporal Dead Zone describes the state, when variables are unreachable.</p>
    <cite>Anonymous</cite>
</blockquote>

The term isn't mentioned in the [EcmaScript Language Specification](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) but is used from us programmers to give the child a name.

So what does that mean? And why haven't I encountered this when writing code in the past (before ES6).

## Variable declaration and hoisting
Let's start with an extremely simplified example:

~~~javascript
console.log(myVar); 
var myVar = 'Hello World'
console.log(myVar);
~~~
**What happens:**

The JavaScript Engine parses the code and hoists `myVar` to the top of its scope. Since we declared it with `var` it and creates a global property. We then try to log `myVar` before we declare it which logs us `undefined`, the default initialization value for `var`. Then we initialize its correct value and log it again. This time we log `Hello World`.
So far so good. Our code doesn't break and we can just live with the `undefined` state.

Let's step it up and write this in ES6 (so let's use `let` instead of `var`):

~~~javascript
console.log(myVar);
let myVar = 'Hello World'
console.log(myVar);
~~~
**What happens:**

Again the JavaScript Engine parses the code and hoists `myVar`. This time we declared it with `let` which doesn't create a global property, since `let` (also `const`) are block scoped. Both are hoisted into the *Temporal Dead Zone*. We then try again to log `myVar` but Ooops! This throws an `Uncaught ReferenceError: can't access lexical declaration 'myVar' before initialization` and breaks our code! 

### Hoisting table
On [ExploringJS](https://exploringjs.com/es6/ch_variables.html#sec_overview-variables), you can find a really nifty table, showing all the variants how variables can be declared and how they are hoisted.

<table class="rwd-table">
    <thead>
        <tr>
            <th>Type</th>
            <th>Hoisting</th>
            <th>Scope</th>
            <th>Global Properties</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-th="Type">var</td>
            <td data-th="Hoisting">Declaration</td>
            <td data-th="Scope">Function</td>
            <td data-th="Global Properties">Yes</td>
        </tr>
        <tr>
            <td data-th="Type">let</td>
            <td data-th="Hoisting">Temporal Dead Zone</td>
            <td data-th="Scope">Block</td>
            <td data-th="Global Properties">No</td>
        </tr>
        <tr>
            <td data-th="Type">const</td>
            <td data-th="Hoisting">Temporal Dead Zone</td>
            <td data-th="Scope">Block</td>
            <td data-th="Global Properties">No</td>
        </tr>
        <tr>
            <td data-th="Type">function</td>
            <td data-th="Hoisting">Complete</td>
            <td data-th="Scope">Block</td>
            <td data-th="Global Properties">Yes</td>
        </tr>
        <tr>
            <td data-th="Type">class</td>
            <td data-th="Hoisting">No</td>
            <td data-th="Scope">Block</td>
            <td data-th="Global Properties">No</td>
        </tr>
        <tr>
            <td data-th="Type">import</td>
            <td data-th="Hoisting">Complete</td>
            <td data-th="Scope">Module Global</td>
            <td data-th="Global Properties">No</td>
        </tr>    
    </tbody>
</table>

I found contradictory statements about the hoisting of `let` and `const`. Some say they are not hoisted at all, some say the are but into the TDZ.
I follow the later one, because a short example shows in my opinion that they are indeed hoisted; to the Temporal Dead Zone.

~~~javascript
// TDZ
// TDZ
// TDZ
console.log(myHoistedLet); // Uncaught ReferenceError: can't access lexical declaration 'myHoistedLet' before initialization
// TDZ
// TDZ
// TDZ
let myHoistedLet = 'Awesome!';
~~~

## Temporal Dead Zone explained

As quoted above, the state between the declaration of a variable with `let` or `const` and its initialization is called the Temporal Dead Zone. This is because of its lifecycle in the JavaScript Engine. So let's have a closer look on this:

### Lifecycle of `let` and `const`

Both variables are bound to their blockscope. So the cycle looks a bit like this:
- Entering the scope of the variable
- Bind space for the variable (Hoisting), the variable is not initialized -> ReferenceError
- If there is a declaration initialize the value if given, if not default to `undefined`
  - `const` is a bis special here, it must have an initializer since it is immutable (not 100% true but for this example close enough)

~~~javascript
// TDZ
console.log(myVar); // ReferenceError
// TDZ
let myVar; // TDZ ends, myVar is initialized without a value
console.log(myVar); // undefined because of the default behaviour

myVar = 'Awesome!'; // initializer is called with a value
console.log(myVar); // Awesome!
~~~

## Why is there a Temporal Dead Zone?

Plain and simple: For debugging and code stability.

The block scoping of `let` and `const` helps with globals pollution plus the addition of a thrown `ReferenceError` is gold. If you are not only programming in JavaScript but for example in Java, the poor handling of (undefined) variables are just a pain.

I am a big fan of failing fast and early, so postponing errors from declaration to the usage is not a good practice. And it also is time consuming. Ever had a bug where the result just is not be correct? Debugging hundreds of lines of code just to find a false declaration of a `var`? Been there, debugged that. No bueno! Failing already at the declaration of the variable would have prevented that error.

Everything to get a more stable codebase is great. And with knowing how JavaScript handles the Temporal Dead Zone, this should be a piece of cake.
