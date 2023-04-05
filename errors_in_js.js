try // defines a block of code totest for errors

catch //set up a block of code to execute in case of an error

throw //creates custom error messages

finally //lets the code execute after trying try and catch regardless of the result

try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}

// types of errors in javascript

SyntaxError //An exception caused by the incorrect use of a pre-defined syntax

EvalError //indicates an error regarding the global eval() function

RangeError // thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value

ReferenceError // A ReferenceError occurs when you try to use a variable that doesn't exist at all

TypeError // A TypeError occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains

URIError

Message

name

