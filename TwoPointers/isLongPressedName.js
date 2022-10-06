
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.

var isLongPressedName = function (name, typed) {
  if (typed.length < name.length) return false;
  let namePtr = 0;
  let typedPtr = 0;

  while (typedPtr < typed.length || namePtr < name.length) {
    if (name[namePtr] === typed[typedPtr]) {
      namePtr++;
      typedPtr++;
    } else if (name[namePtr - 1] === typed[typedPtr]) {
      typedPtr++;
    } else {
      return false;
    }
  }
  return true;
};

