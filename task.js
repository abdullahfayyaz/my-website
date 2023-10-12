var names = ["John", "Jane", "Mike", "Sarah", "Bob"];

for (var i = 0; i < names.length; i++) {
  var name = names[i];

  if (name.charAt(0) === 'j' || name.charAt(0) === 'J') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
