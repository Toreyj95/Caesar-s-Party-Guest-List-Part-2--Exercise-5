const guests = [ "ANTONY","CICERO", "CASSISUS", "CLEOPATRA"];

//Step 1   Caesar remembers he forgot to add his friend "BRUTUS" to the list. Add him to the beginning of the list.

guests.unshift("BRUTUS");
 
//Question # 1 
// You can verify that "BRUTUS" was added to the beginning by doing the following:

guests[0] = 

// Step 2 add AUGUSTUS AND LUCIA to the end of the list.

guests.push("AUGUSTUS", "LUCIA");

// step 3 See if SPARTACUS has been invited to the party. check to see if he is on the list and 
// find out what position.

const SparticusIndex = guests.indexOf('SPARTACUS');

// Step 4 Caesar just recieved a message that "CASSIUS" wont be able to make it. Remove him from the list.

guests.pop("CASSIUS");

// Step 5 Caesar wants to send a special invite to the first 3 guest on the list. Extract these names into a new array.

const SpecialGuests = guests.slice(0,3);

// Step 6 Caesar decided that he wants his party list in alphabetical order. Sort the array. However, Caesar wants his most honored guests (those added first) to remain at the
// of the list. Can you think of a way to sort the guests but keep the honored ones at the top.

const HonoredGuests = guests.slice (0,2);
const otherGuests = guests.slice(2);
otherGuests.sort();
const sortedGuests = HonoredGuests.concat(otherGuests);

