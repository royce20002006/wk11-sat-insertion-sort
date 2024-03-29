// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  //Copy the original array
  let newArr = arr.slice();
  
  // Create an array to store the sorted values
  let sorted = [];
  ;
  // While the array is not empty:
  while (newArr.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','))
    // - Pop a value from the array
    removedEl = newArr.pop();
    // - Create a new spot at the end of the array with null to help with comparisons
    
    
    // - Walk through the sorted array in reverse order
    if (!sorted.length) {
      sorted.push(removedEl)
    } else {
      for (let i = sorted.length - 1; i >= 0; i--) {
        
        // - Check if the value to the left is smaller than the new value
        if (sorted[i] < removedEl) {
          // - If so, you've reached the insertion point so exit the loop
          sorted.push(removedEl);
          break;
        } else if (sorted[i] > removedEl && sorted[i - 1] < removedEl ||
          sorted[i] > removedEl && sorted[i - 1] === undefined) {
            // - If not shift the value to the right by 1 and continue
            sorted.splice(i, 0, removedEl)
            break;
          }
        }
      }
      
      //Insert the unsorted value at the break point
      
      
    }
    // Return the sorted array
    return sorted;
    // Your code here 
  }
  // In-place Insertion Sort
  // Mutates the original array
  function insertionSortInPlace(arr) {
    debugger;
    
    // Pseudocode:
    // Set a pointer dividing the array into sorted and unsorted halves
    let divider = 1;
    // Repeat while the unsorted half is not empty:
    while(arr.length > divider) {
      // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
      console.log(arr.join(','));
      // - Grab the first value from the unsorted half
      
      // let el = arr.splice(divider,1)
      let el = arr[divider]
      
      // - For each value starting from the divider,
      for (let i = divider; i >= 0; i--) {
        // - Check if the value to the left is smaller than the unsorted value
        if (i === 0) arr[i] = el;
        else if ( arr[i - 1]< el) {
          // arr.splice(i, 0, el);
          arr[i] = el;
          // - If so, you've reached the insertion point so exit the loop
          break;
        } else {
          // - If not shift the value to the right by 1 and continue
          arr[i] = arr[i - 1];
        }
      }
      // - Increment the dividing pointer and repeat
      divider++
    }
    // Return the mutated array
    return arr;
    
    
    
    
    
    
    // Your code here 
  }
  debugger;
  let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  insertionSortInPlace(arr)
  
  module.exports = [insertionSort, insertionSortInPlace];
