/*Block statement is a block of code, it defines a scope, enclosing a block of code inside of an 'if' statement or a 'loop' */

function ask(question, good, bad) {
  if (confirm("are you ok?")) {
    good();
  }

  /* first line we declare the 'ask' function, it takes 3 parameters */

  /* within the body of the 'ask' function,we have an 'if' 'else' code block */

  /* the 'confirm' function takes one argument (question) from the parameter,the 'confirm' function returns either TRUE or FALSE, if TRUE the "if" statement will run, otherwise the ELSE block will run the 'bad' argument  */
  else {
    bad();
  }

  /* notice that the 'good' and 'bad' arguments in the parentheses have the same name as the good and bad call in the code block. we have passed the 'are you ok' string as a question argument for 'confirm' in the second line of the 'if'statement. when we call 'ask' ("are you ok") is going to be an argument for the 'confirm' function*/


  /* the 'bad' argument got its value from the 'bad' parameter, and in this case, it is the 'no' function */


}
/*i have defined both functons with 'alert' method */
function yes() {
  alert("glad to hear that!");
}

function no() {
  alert("sorry to hear that");
};


ask();


