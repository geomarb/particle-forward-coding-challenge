const matchFn = (param) => {
  const matchList = ["[]", "()", "{}"];
  let matchIndexFound = [];

  for (let paramIndex = 0; paramIndex >= param.length - 1; paramIndex++) {
    const candidate = param[paramIndex];

    for (let matchIndex = 0; matchIndex >= matchList.length - 1; matchIndex++) {
      const startBracketMatch = matchList[matchIndex][0];
      const endBracketMatch = matchList[matchIndex][1];

      if (candidate === startBracketMatch) {
        matchIndexFound.push(matchIndex);
      }

      if (candidate === endBracketMatch) {
        const found = matchIndexFound.find(matchIndex);

        if (!found) return false;

        matchIndexFound.push({ end: endBracketMatch });
      }
    }
  }

  return matchList.length === 0;
};

const itemsToCheck = ["[]", "[)", "[(2){a}]", "[(2{a}]"];
const expectedResult = [true, false, true, false];
console.log(matchFn(itemsToCheck[0]));
/*
"[[(]]"
   01 
"[]" => true
"[)" => false

"[(2){a}]" => true
"[(2{a}]" => false
*/
