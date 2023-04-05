for (initialization; condition; finalExpression) {
    // code
  }

  for (let i = 1; i < 10; i += 2) {
    if (i === 7) {
      break;
    }
    console.log('Total elephants: ' + i);
  }
  
  // Output:
  // Total elephants: 1
  // Total elephants: 3
  // Total elephants: 5