<<<<<<< HEAD
let tatalAmount = 120;
=======
let totalAmount = 889;
>>>>>>> 7f36a846f5827396999ee8eff00b9dfaa957032c
let friends = [
  {
    firstName: 'Alex',
    lastName: 'Lee',
    mobile: '0420400163',
    email: 'alex.lee@gmail.com',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    mobile: '0420400183',
    email: 'bob.smith@gmail.com',
  },
  {
    firstName: 'Charlie',
    lastName: 'Trump',
    mobile: '0420400283',
    email: 'charlie.trump@gmail.com',
  },
  {
    firstName: 'Donald',
    lastName: 'Trump',
    mobile: '0420400383',
    email: 'donald.trump@gmail.com',
  },
];
let shoppingItems = [
  {
    title: "grocery Woolworths",
    amount: 150,
    date: new Date(),
    isSettled: false,
    },
    {

<<<<<<< HEAD
    
    title: "grocery aldi",
    amount: 150,
    date: new Date(),
    isSettled: true,
    }
    
]

function showShoppingItems(shoppingItems) {
const shoppingItemsElement = document.getElementById('shopping_items');
let shoppingListElements = '';
for(let shoppingItem of shoppingItems) {
  let shoppingListElement = `<div>
  <div>
  <h3>${shoppingItem.title}</h3>
  <time>${shoppingItem.date}</time>
  </div>
  <div>${shoppingItem.amount}</div>

  </div>`
  shoppingListElements += shoppingItemElement;


}


shoppingItemsElement.innerHTML = shoppingListElements;
}
=======
let shoppingItems = [
  {
    title: 'Grocery shopping',
    amount: 50,
    date: new Date(),
    isSettled: false,
  },
  {
    title: 'Aldi shopping',
    amount: 150,
    date: new Date(),
    isSettled: true,
  },
];

function showShoppingItems(shoppingItems) {
  const shoppingItemsElement = document.getElementById('shopping_items');
  let shoppingListElements = '';
  for (let shoppingItem of shoppingItems) {
    let shoppingItemElement = `<div>
        <div><h3>${shoppingItem.title}</h3>
            <time>${shoppingItem.date}</time>
        </div>
        <div>$${shoppingItem.amount}</div>
    </div>`;
    shoppingListElements += shoppingItemElement;
  }
  shoppingItemsElement.innerHTML = shoppingListElements;
}

// Function to display friends
>>>>>>> 7f36a846f5827396999ee8eff00b9dfaa957032c
function showFriends(friends) {
  const friendsElement = document.getElementById('friends');
  let friendListElements = '';
  for (let friend of friends) {
    let friendElement = `<div title="${friend.firstName} ${friend.lastName}"></div>`;
    friendListElements = friendListElements + friendElement;
  }
  friendsElement.innerHTML = friendListElements;
}

// Function to show unsettled amount
function showUnsettledAmount(unsettledAmount) {
  const unsettledAmountElement = document.getElementById('unsettled_amount');
  unsettledAmountElement.innerHTML = unsettledAmount;
}
<<<<<<< HEAD
=======

>>>>>>> 7f36a846f5827396999ee8eff00b9dfaa957032c
showShoppingItems(shoppingItems);
showFriends(friends);
showUnsettledAmount(totalAmount / friends.length);
