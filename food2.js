class Food {
  constructor(name, allergens, price) {
    this.name = name;
    this.allergens = allergens;
    this.price = price;
  }

  describe() {
    return `${this.name} - Allergens: ${this.allergens}  -  Price: ${this.price}`
  }
}

class Menu {
  constructor (menuName){
    this.menuName = menuName;
    this.foodList = [];
  }

  addFoodItem(currentMenu) {
    this.menuGroup = currentMenu;
    let name = prompt('Enter name for new Food Item');
    let allergens = prompt(`Enter ${name} Allergens:`);
    let price = prompt(`Enter ${name} Price:`);
    this.foodList.push(new Foods(name, allergens, price));
  }
  // console.log(menuName);

  // addFoodItems(input) {
  //   this.foodList.push(input);
  // }
}

// function listMenus (){
//   //takes in a menu and adds it to the
//   //

// }

class Begin {
  constructor (){
    this.menuGroup = [];
  }
  // menuGroup = [ {menu}, {menu1}]
  ////{menuName: name,
///////foodList: [{food}, {food1}]}
///////////////{name: name,
///////////////{allergens: allergen,
///////////////{price: price,
// }

  //List Menu of Options as a Prompt

  //MainMenuPrompt
  mainMenu(){
    // let menuOptions = prompt(`
    // 1) Create a New Menu
    // 2) Update Existing Menu
    // 3) Display Full Menu
    // 0) Exit
    // `)
    // let message = menuOptions;
    let message = this.showMainMenu();
    while (message != 0) {
      switch(message) {
        case '1':
          this.createMenu();
          break;
        case '2':
          this.updateMenu();
          break;
        case '3':
          alert(this.displayMenuList());
          break;
        default:
          message = 0;
      };
      message = this.showMainMenu();
    }
    alert('Come Back Soon!')
  };

  showMainMenu () {
    return prompt(`
    1) Create a New Menu
    2) Update Existing Menu
    3) Display Full Menu
    0) Exit
    `);
  }

  createMenu(){
    // this.displayMenuList();
    // console.log(this.menuGroup)
    let newMenu = new Menu (prompt(`${this.displayMenuList()}
    Enter New Menu Name Below: `));
    this.menuGroup.push(newMenu);
    // alert(this.displayMenuList());
    // console.log('menulog', this.menuGroup.length);
    // this.mainMenu();
  };

  // yesNo (input){
  //   input = prompt(`Would you like to create a new Menu:
  //   1 ) Yes
  //   2 ) No`);
  //   let output = 'GoodBye';
  //   if (input === '1' /*|| input === 'Yes' || input === 'yes'*/) {
  //     // output = this.createMenu();
  //     return this.createMenu();
  //     // this.displayMenuList();
  //   } else {
  //     alert(output);
  //   };
  //   // return input;
  // };

  displayMenuList(){
    let menuList = '';
    if (this.menuGroup.length > 0){
    for (let i = 0; i < this.menuGroup.length; i++){
      menuList += `${i} )  ${this.menuGroup[i].menuName} \n`
    }
    return `Current Menus:
    ${menuList}
    - - - - - - - - - - - - - - - - - - -`
    } else {
      return 'Zero Menus have been Created' + '\n'
    };
  };

  displayFoodList(menuIndex){
    let currentMenu = this.menuGroup[menuIndex];
    console.log('line 125 display foodlist : current Menu:  ', Object.getOwnPropertyNames(currentMenu));
    console.log('line 125 display foodlist : current Menu:  ', currentMenu.menuName);
    console.log('line 125 display foodlist : foodlist:  ', currentMenu.foodList);
    console.log('line 125 display foodlist : add food item:  ', this.addFoodItem(currentMenu).foodList.push(new Food ('cake', 'gluten', '$5.99')));
    console.log('line 125 display foodlist : add food item:  ', currentMenu.foodList.push(new Food ('cake', 'gluten', '$5.99')));
    let fList = ''
    // if(this.menuGroup[menuIndex].foodList.length > 0) {
      if (menu.foodList.length > 0){
      for (let j = 0; j < currentMenu.foodList.length; i++) {
        let currentFood = currentMenu.foodList[j];
        let fname = currentFood.name;
        let fallergens = currentFood.allergens;
        let fprice = currentFood.price;
        fList += `${j} )  ${currentMenu.foodList[j].name} \n`
      }
      return fList;
    }else {
      return 'Zero Foods Have Been Added';
    }
    // return fList;

  }

  subMenu(currentMenu){
    return prompt(`
    ${currentMenu.menuName}
    ${this.displayFoodList(currentMenu)}

    ------------------------

    1) Add Food To Menu
    2) Delete Food From Menu
    3) Back To Main Menu`)
  }

  updateMenu(){
    // display existing menus
    // identify which menu to update
    let menuIndex = prompt(`${this.displayMenuList()}
    Select Menu Index to Update:`);
    let currentMenu = this.menuGroup[menuIndex]
    console.log(currentMenu);
    // display identified selected menu and current foods
    this.displayFoodList(menuIndex)
    let selection = this.subMenu(currentMenu);
    while ( selection != 0) {
      switch(selection){
      // add Food
      case '1':
        this.addFoodItem(currentMenu);
        break;
      case '2':
        this.deleteFoodItem();
        break;
      case '3':
        this.mainMenu();
        default:
          selection = 0;
      }
      selection = this.subMenu(currentMenu);
    }

  }

  // addFoodItem(currentMenu) {
  //   let name = prompt('Enter name for new Food Item');
  //   let allergens = prompt(`Enter ${name} Allergens:`);
  //   let price = prompt(`Enter ${name} Price:`);
  //   currentMenu.foodList.push(new Foods(name, allergens, price));
  // }
//////////////-----------------------------------------------------------------------------------

  // addFoods(input){
  //   input = prompt(`${this.displayMenuList()}

  //   Enter Menu Index You Wish To Add Food Items to:`);

  //   this.menuGroup[input]

  //   if (this.menuGroup.length > 0){
  //     let selectedMenu = [];
  //     for (let i = 0; i < this.menuGroup.length; i++){
  //       selectedMenu = `${this.menuGroup[input]}`;
  //       if (selectedMenu.length > 0) {
  //         let
  //       }
  //     }
  //     return `Current Menus:
  //     ${menuList}
  //     - - - - - - - - - - - - - - - - - - -`
  //     } else {
  //       return 'Zero Menus have been Created' + '\n'
  //     };
  //   };



  // }
};

// let food1 = new Food('Cheese', 'Dairy', '$5.99');
// let food2 = new Food('Cake', 'Gluten', '$10.99');
// let food3 = new Food('Coke', 'None', '$3.99');

// let food4 = new Food('Bean', 'None', '$2.99');
// let food5 = new Food('Bread', 'Gluten', '$1.99');
// let food6 = new Food('Beer', 'Gluten', '$6.99');
// // console.log(food1, food2, food3);
// // console.log(food1.describe(), food2.describe(), food3.describe());

// let menu1 = new Menu('Breakfast');
// menu1.addFoodItems(food1);
// menu1.addFoodItems(food2);


// console.log('Menu Test:  ' , menu1);
// console.log('foodList:  ' , menu1.foodList);
// console.log('menuGroup List:  ' , this.menuGroup.[0].foodList);
let begin = new Begin();
// begin.start();
begin.mainMenu();
// begin.createMenu();
// begin.yesNo();
// begin.displayMenuList();



//Start Windows Prompt

//Select Activity

////Go to submenu for activity