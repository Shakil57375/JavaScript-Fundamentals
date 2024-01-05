
// array reducer
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// Summing up all elements in the array using reduce
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum); // Output: 15
  
  // Example array of items
  let items = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Headphones", price: 100, category: "Electronics" },
    { name: "Backpack", price: 50, category: "Fashion" },
    { name: "Smartphone", price: 600, category: "Electronics" },
    { name: "Jacket", price: 120, category: "Fashion" },
  ];
  
  // Calculate the total cost of Electronics items
  let totalElectronicsCost = items.reduce((accumulator, currentItem) => {
    // Check if the item belongs to the 'Electronics' category
    console.log(accumulator);
    console.log(currentItem);
    if (currentItem.category === "Electronics") {
      // Add the price of Electronics items to the accumulator
      return accumulator + currentItem.price;
    } else {
      // If not Electronics, simply return the accumulator
      return accumulator;
    }
  }, 0);
  
  console.log(totalElectronicsCost); // Output: 1500
  
  // Example array of transactions
  let transactions = [
    { id: 1, amount: 150, type: "withdrawal" },
    { id: 2, amount: 50, type: "deposit" },
    { id: 3, amount: 200, type: "withdrawal" },
    { id: 4, amount: 200, type: "deposit" },
    { id: 5, amount: 200, type: "deposit" },
  ];
  
  // Calculate the net balance and count of each transaction type
  let summaryReport = transactions.reduce(
    (summary, transaction) => {
      // Check the type of transaction ('withdrawal' or 'deposit')
      if (transaction.type === "withdrawal") {
        // Reduce the balance for withdrawal
        summary.netBalance = summary.netBalance - transaction.amount;
        // Increment the count of withdrawals
        summary.withdrawalCount++;
      } else if (transaction.type === "deposit") {
        // Increase the balance for deposit
        summary.netBalance += transaction.amount;
        // Increment the count of deposits
        summary.depositCount++;
      }
  
      // Return the updated summary object for the next iteration
      return summary;
    },
    // Initial values for the summary object
    { netBalance: 0, withdrawalCount: 0, depositCount: 0 }
  );
  
  console.log(summaryReport);
  // Output: { netBalance: 100, withdrawalCount: 2, depositCount: 2 }

  // Array of student objects with grades
const students = [
    { name: 'Alice', grades: { math: 90, english: 85, science: 95 } },
    { name: 'Bob', grades: { math: 88, english: 92, science: 89 } },
    { name: 'Charlie', grades: { math: 78, english: 85, science: 80 } },
  ];
  
  // Calculate the average grade for each subject
  const subjectAverages = students.reduce((averages, student) => {
    Object.entries(student.grades).forEach(([subject, grade]) => {
      averages[subject] = (averages[subject] || 0) + grade;
    });
    return averages;
  }, {});
  
  Object.keys(subjectAverages).forEach(subject => {
    subjectAverages[subject] /= students.length;
  });
  
  console.log(subjectAverages);
  // Output: { math: 85.33, english: 87.33, science: 88 }
  