const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSantaWFlatten(arr) {
    // Your code here
    const saveSantaArray = dangerArray.flat(getDepth(dangerArray))
    
    return saveSantaArray.flatMap(item => {
      return (item === "🎅") ? item : [];
  });    
}

function saveSantaWOFlatten(arr) {
    return arr.flatMap(item => {
    if (Array.isArray(item)) {
      return saveSantaWOFlatten(item);
    } else {
      return (item === "🎅") ? item : [];
    }
  });
}

function getDepth(arr) {
  let maxDepth = 1; // Start with 1 to account for the initial array

  function traverse(currentDepth, item) {
    if (Array.isArray(item)) {
      maxDepth = Math.max(maxDepth, currentDepth + 1);
      item.forEach(traverse.bind(null, currentDepth + 1));
    }
  }

  traverse(1, arr);
  return maxDepth;
}


// Check the returned results from saveSanta()
console.log(saveSantaWFlatten(dangerArray))
console.log(saveSantaWOFlatten(dangerArray))