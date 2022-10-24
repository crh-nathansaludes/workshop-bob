/*
Bob is a lackadaisical teenager. In conversation, his responses are very limited.
Bob answers 'Sure.' if you ask him a question.
He answers 'Whoa, chill out!' if you yell at him.
He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.
He says 'Fine. Be that way!' if you address him without actually saying anything.
He answers 'Whatever.' to anything else.
*/

const RESPONSE_A = "Whatever.";
const RESPONSE_B = "Whoa, chill out!";
const RESPONSE_C = "Sure.";
const RESPONSE_D = "Calm down, I know what I\'m doing!";
const RESPONSE_E = "Fine. Be that way!";

/* ---------------------------------------------------------------------------------------------------------
Implementation:
Checks if the expression contains 1 single lowercase letter
--------------------------------------------------------------------------------------------------------- */
function isAllCapital(expression) {
   let asciiValue = '';
   const lastIndexOfString = (hasNoPunctuation(expression) ? expression.length : expression.length - 1);

   for (let index = 0; index < lastIndexOfString; index++) {
      asciiValue = expression.charCodeAt(index);

      if (asciiValue >= 97 && asciiValue <= 122) {
         return false;
      }
   }

   return true;
}


/* ---------------------------------------------------------------------------------------------------------
Implementation:
Check if the expression contains any other character aside from numbers. If not, then the expression is
considered numeric ONLY.
--------------------------------------------------------------------------------------------------------- */
function isNumericOnly(expression) {
   let asciiValue = '';
   const lastIndexOfString = (hasNoPunctuation(expression) ? expression.length : expression.length - 1);

   for (let index = 0; index < lastIndexOfString; index++) {
      asciiValue = expression.charCodeAt(index);
      if (asciiValue < 48 || asciiValue > 57) {
         return false;
      }
   }
   return true;
}


/* ---------------------------------------------------------------------------------------------------------
Implementation:
Checks if the expression contains a question punctuation at the end.
--------------------------------------------------------------------------------------------------------- */
function isQuestion(expression) {
   if (expression.charAt(expression.length - 1) === "?") {
      return true;
   }
   return false;
}


/* ---------------------------------------------------------------------------------------------------------
Implementation:
Checks if the expression contains a exclamation punctuation at the end.
--------------------------------------------------------------------------------------------------------- */
function isExclamatory(expression) {
   if (expression.charAt(expression.length - 1) === "!") {
      return true;
   }
   return false;
}


/* ---------------------------------------------------------------------------------------------------------
Implementation:
Checks if the expression contains a period at the end.
--------------------------------------------------------------------------------------------------------- */
function isStatement(expression) {
   if (expression.charAt(expression.length - 1) === ".") {
      return true;
   }
   return false;
}


/* ---------------------------------------------------------------------------------------------------------
Implementation:
Checks if the expression does NOT end with a punctuation.
--------------------------------------------------------------------------------------------------------- */
function hasNoPunctuation(expression) {
   if (!isQuestion(expression) && !isExclamatory(expression) && !isStatement(expression)) {
      return true;
   }
   return false;
}


function evaluateExpression(expression) {

   if (!expression) {
      return RESPONSE_E;
   }

   if (isNumericOnly(expression)) {
      if (isQuestion(expression)) {
         return RESPONSE_C;
      }
   }

   if (isAllCapital(expression)) {
      if (isQuestion(expression)) {
         return RESPONSE_D;
      }

      if (isExclamatory(expression)) {
         return RESPONSE_B;
      }

      if (isStatement(expression)) {
         return RESPONSE_B;
      }

      if (hasNoPunctuation(expression)) {
         return RESPONSE_B;
      }
   }

   if (isQuestion(expression)) {
      return RESPONSE_C;
   }

   if (isExclamatory(expression)) {
      return RESPONSE_A
   }

   if (isStatement(expression)) {
      return RESPONSE_A
   }
}

function hey(expression) {
   return evaluateExpression(expression);
}

(_ => {
   console.log('Running hey...');
   // Stating Something
   console.log(hey('Tom-ay-to, tom-aaaah-to.') === 'Whatever.');

   // Shouting
   console.log(hey('WATCH OUT!') === 'Whoa, chill out!');

   // Shouting Gibberish
   console.log(hey('FCECDFCAAB') === 'Whoa, chill out!');

   // Asking a question
   console.log(hey('Does this cryogenic chamber make me look fat?') === 'Sure.');

   // Asking a numeric question
   console.log(hey('You are, what, like 15?') === 'Sure.');

   // Asking gibberish
   console.log(hey('fffbbcbeab?') === 'Sure.');

   // Talking forcefully
   console.log(hey("Let's go make out behind the gym!") === 'Whatever.');

   // Using acronyms in regular speech
   console.log(hey("It's OK if you don't want to go to the DMV.") === 'Whatever.');

   // Forceful question
   console.log(hey('WHAT THE HELL WERE YOU THINKING?') === 'Calm down, I know what I\'m doing!');

   // Shouting numbers
   console.log(hey('1, 2, 3 GO!') === 'Whoa, chill out!');

   // Only numbers
   console.log(hey('4?') === 'Sure.');

   // Shouting with special characters
   console.log(hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!') === 'Whoa, chill out!');
})();