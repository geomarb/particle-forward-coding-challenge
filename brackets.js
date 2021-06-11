function checkBrackets(str) {
  const openBrackets = ["[", "(", "{"];
  const closeBrackets = ["]", ")", "}"];
  const bracketStack = [];

  for (let charIndex = 0; charIndex <= str.length - 1; charIndex++) {
    const char = str[charIndex];

    if (openBrackets.includes(char)) {
      bracketStack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (bracketStack.length === 0) {
        return false;
      }
      for (let i = 0; i <= openBrackets.length - 1; i++) {
        if (
          char === closeBrackets[i] &&
          !bracketStack.includes(openBrackets[i])
        ) {
          return false;
        }
      }
      bracketStack.pop();
    }
  }

  return bracketStack.length === 0;
}

function checkList() {
  const checkItems = ["[]", "[)", "[(2){a}]", "[(2{a}]"];

  for (let i = 0; i < checkItems.length; i++) {
    console.log(
      ` ${checkBrackets(checkItems[i]) ? "✅" : "❌"} "${checkItems[i]}"`
    );
  }
}

checkList();
