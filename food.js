// Menu Maker App - Using Prompts for User inputs
/*
  User can:
    - Create a Menu for different parts of the day
    -- Define the Menu Parts(Sections) - String
    ---- Define the Food Items in each Menu Section
    ------ Define Food Item:  Name, Allergens, Price

    - Modify Food item for Different Menu Type
    -- If the ID === 0 then add A
    - Display Specific Menus and all of the Menu Sections and Food Items - Alert

    - Same food Item on different menus at different prices.
    - Create an ID system for each Item
    {Breakfast: [
      {
        id: 0
        food: Cheese,
        allergen: dairy,
        price: $5.99
    }, {
        id: 0
        food: Cake,
        allergen: dairy,
        price: $7.99
    },
    ],
  }

    {Dinner: [
      {
        id: 10
        food: Cheese,
        allergen: dairy,
        price: $15.99
    }, {
        id: 0
        food: Cake,
        allergen: dairy,
        price: $7.99
    },
    ],
  }

 (previous menu) Display menu
    0) Breakfast
    1) Brunch
    2) Lunch
      //// User Selects Breakfast (1)  ////
    -   Breakfast Menu    -

    Apps
      Bread - Gluten - $5.99
      Bread - Gluten - $5.99
      Bread - Gluten - $5.99
    Main Course
      Pancakes - Gluten - $13.99
    Drinks
      Coffee - none - $1.99


*/

// class FoodItems {
//   constructor (type) {

//   }
// }


// MenuType is Breakfast, Brunch, Lunch, Happy Hour, Dinner, Special Event
// class MenuType {
//   constructor(_name) {
//     this.name = _name;
//   }
//   //Outputs Menu Name
//   describe() {
//     return `   -    ${this.name}  Menu    -   `
//   }
// }

// Menu Section is Apps, Main Course, Dessert, Drinks
// Menu Section contains a list of added food items
// class MenuSectionInfo {
//   constructor(name) {
//     this.name = name;
//     this.foodItems = [];
//   }

//   // [
//     {`0)` + `${this.name} - Allergens: ${this.allergens}  -  Price: ${this.price}.`}
//     {`0)` + `${this.name} - Allergens: ${this.allergens}  -  Price: ${this.price}.`}
//   ]

//   // addFoodItem(item) {
//   //   if (item instanceof FoodItem) {
//   //     this.foodItems.push(item);
//   //   } else {
//   //     throw new Error(`You can only add an instance of FoodItem. Argument is not a FoodItem ${item}`)
//   //   }
//   // }

//   // describeSection() {
//   //   return ` ~ ${this.name} ~  ( ${this.foodItems.length} Food Items )`
//   // }

//   describeFood() {
//     let foodList = ``;
//     for(i = 0; i < this.foodItems.length; i++) {
//       foodList += `   ${i})   ${this.foodItems[i].describe} \n`
//     }
//     // return ` ~ ${this.name} ~  ( ${this.foodItems.length} Food Items )`
//     return this.FoodList;
//   }
// }

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
  // console.log(menuName);

  addFoodItems(input) {
    this.foodList.push(input);
  }
}

// Option to Create a Menu
class Begin {
  constructor (){
    this.menuGroup = [];
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1' :
          this.createNewMenu();
          break;
        case '2' :
          this.updateMenus();
          break;
        case '3' :
          this.displayFullMenu();
          break;
        default:
            selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('See You Next Time!');
  }

  showMainMenuOptions() {
    return prompt(`
    -             MENU MAKER 3000           -
      -                MAIN  MENU             -

    0) exit
    1) BUILD NEW MENU
    2) UPDATE EXISTING MENU
    3) DISPLAY FULL MENU
    `);
  }



  // showMenuOptions(editFoodItems) {
  //   return prompt(`
  //   0) back
  //   1) Add Food Item to Menu Section
  //   2) delete Food Item from Menu Section
  //   ----------------------
  //   ${editFoodItems}
  //   `);
  // }

  createNewMenu() {
    let show = this.showMenus();
    let name = prompt(`Menus Created:

    ${show}
    --------------------------
    Enter name for New Menu:`);
    this.menuGroup.push(new Menu(name));
  }

  showMenus () {
    let menus = '';
    if (this.menuGroup.length > 0) {
      for (let i= 0; i < this.menuGroup.length; i++){
        menus += `${i} )   ${this.menuGroup[i].menuName} \n  `};
      return menus;
    } else {
      menus = 'Zero Menus So Far';
      return menus;
    };
  };

  // displayMenus() {
  //   let menus = '';
  //   // let default = this.createNewMenu()
  //   if (this.menuGroup.length > 0) {
  //     for (let i= 0; i < this.menuGroup.length; i++){
  //       // menus += `${i} )   ${this.menuGroup[i].name} \n`
  //       menus += i + ' )   ' + this.menuGroup[i].name + '\n'
  //     }
  //     let display = prompt(`${menus}
  //     Enter the index of the Menu you wish to Update:`);
  //     return display;
  //   } else {
  //     display = alert(`No Menus Have Been Created. `);
  //     return display;
  //   }
  // }

  /*
  showMenuOptions(editFoodItems) {
    return prompt(`
    0) back
    1) Add Food Item to Menu Section
    2) delete Food Item from Menu Section
    ----------------------
    ${editFoodItems}
    `);
  }
  let selection = this.showMenuOptions(description);
      switch (selection) {
        case '1' :
          this.addFoodItem();
          break;
        case '2' :
          this.deleteFoodItem();
      }
      */
  // changeName(index, name){
  //   this.showMenus();
  //   this.menuGroup[index].menuName = name;
  // }

  updateMenus() {
    // let show = this.showMenus();
    // let index = prompt(`Menus Created:

    // ${show}
    // --------------------------
    // Enter index of Menu to Update:`);

    let selection = showUpdateMenuOptions();
    selection = prompt(`
    -                UPDATE  MENU             -

    0) exit
    1) CHANGE MENU NAME
    2) ADD/DELETE FOODS
    3) DELETE MENU
    `);
    // while (selection != 0) {
      switch (selection) {
        case '1' :
          this.changeName(prompt('Enter Menu Index to be Changed:'), prompt('Enter New Menu Name'));
          break;
        case '2' :
          this.addFoods();
          break;
        case '3' :
          this.deleteFoods();
          break;
          case '4' :
            this.deleteMenu();
            break;
        default:
            selection = 0;
      // }
      // selection = this.showMainMenuOptions();
    };
  };

  // addFoods() {
  //   let name = prompt('Enter name for new Food Item');
  //   let allergens = prompt(`Enter ${name} Allergens:`);
  //   let price = prompt(`Enter ${name} Price:`);
  //   this.menuGroup.foodList.push(new Foods(name, allergens, price));
  // };

  // deleteFoodItem(input) {
  //   let menu = this.menuGroup[input];
  //   let index = prompt('Enter the index of the Food Item you wish to delete:');
  //   if (index > -1 && index < this.menuGroup[index].foodList.length) {
  //     menu.foodList.splice(index, 1);
  //   }
  // }

  // deleteMenu() {
  //   // let index = prompt('Enter index of the Menu Section you wish to delete:');
  //   let index = this.displayMenuSections();
  //   if (index > -1 && index < this.menuGroup.length) {
  //     this.menuGroup.splice(index, 1);
  //   }
  // }



    // let menus = '';
    //   for (let i = 0; i < this.menuGroup.length; i++){
    //     menus += `${i} )   ${menuGroup[i].name}`
    //   };
    //   console.log(menus);
  showUpdateMenuOptions() {
    return prompt(`
      -                UPDATE  MENU             -

    0) exit
    1) CHANGE MENU NAME
    2) ADD/DELETE FOODS
    3) DELETE MENU
    `);
    };
  };

  /*
  let input = this.displayStartMenu();
  while(input != 0 && input > 0) {
    switch(input) {
        // Add Exit Menu Maker
        // Create New Menu - Prompts user to input Menu Name
        //// After Menu Name is inserted - User Prompted to add Food Items
      case '1' :
        this.buildNewMenu();
        break;
        // Update Exiting Menu - Prompts User to Add Food Item, Delete Food Item
      case '2' :
        this.updateMenu();
        break;
        // Display Full Menu and Food Items - Propmpted by the User's selection from a list of all menus
      case '3' :
        this.displayFullMenu();
        break;
      default :
          input = '0';
    }
    input = this.displayStartMenu();
  }
  alert('Great Job Making Menus with MenuMaker 3000');

  displayStartMenu() {
    return prompt (`

          -      MENU MAKER 3000      -

    0) exit
    1) BUILD NEW MENU
    2) UPDATE EXISTING MENU
    3) DISPLAY FULL MENU
    `)
  };
  */
  // display menu of of options
  ////Create New Menu (User Input)
    ////User Input Menu Name
    ////Pre-define a list of names - User selects from the list
    //--- Breakfast Menu
    //--- Lunch Menu
    ////Update Menu
  ////View Menus
    // List of Menus
    ////Update Menu
      ////Add Food
  ////Delete Menu
  ////Display Final Menu
  ////Exit

//// Add Food Items to that Menu
// Create Food Items

// Display the Menu


let food1 = new Food('Cheese', 'Dairy', '$5.99');
let food2 = new Food('Cake', 'Gluten', '$10.99');
let food3 = new Food('Coke', 'None', '$3.99');

let food4 = new Food('Bean', 'None', '$2.99');
let food5 = new Food('Bread', 'Gluten', '$1.99');
let food6 = new Food('Beer', 'Gluten', '$6.99');
// console.log(food1, food2, food3);
// console.log(food1.describe(), food2.describe(), food3.describe());

let menu1 = new Menu('Breakfast');
menu1.addFoodItems(food1);
menu1.addFoodItems(food2);


// console.log('Menu Test:  ' , menu1);
console.log('foodList:  ' , menu1.foodList);
console.log('menuGroup List:  ' , this.menuGroup.[0].foodList);
let begin = new Begin();
// begin.start();
begin.createNewMenu();

/*

class Menu {
  constructor() {
    this.menuSections = [];
    this.selectedMenuItems = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1' :
          this.createMenuSections();
          break;
        case '2' :
          this.viewMenuSections();
          break;
        case '3' :
          this.deleteMenuSection();
          break;
        case '4' :
          this.displayFullMenu();
          break;
        default:
            selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('Goodbye!');
  }

  showMainMenuOptions() {
    return prompt(`
    0) exit
    1) Create NEW MENU SECTION
    2) View MENU SECTION
    3) Delete MENU SECTION
    4) Display MENU SECTIONS
    `);
  }

  showMenuOptions(editFoodItems) {
    return prompt(`
    0) back
    1) Add Food Item to Menu Section
    2) delete Food Item from Menu Section
    ----------------------
    ${editFoodItems}
    `);
  }

  displayFullMenu() {
    let menuString = '';
    for (let i = 0; i < this.menuSections.length; i++) {
      menuString += i + ')' + this.menuSections[i].name + '\n';
    }
    // console.log(this.editFoodItems, editFoodItems);


    alert(`${menuString}`);
  }

  displayMenuSections() {
    let menuString = '';
    for (let i = 0; i < this.menuSections.length; i++) {
      menuString += i + ')' + this.menuSections[i].name + '\n';
    }

    let test = prompt(`${menuString}
    Enter the index of the Menu Section you wish to view:`);
    return test;
  }

  createMenuSections() {
    let name = prompt('Enter name for New Menu Section:');
    this.menuSections.push(new MenuSection(name));
  }

  viewMenuSections() {
    // this.displayTeams();
    // let index = prompt(`${this.displayMenuSections()}`);
    let index = this.displayMenuSections();
    if  (index > -1 && index < this.menuSections.length) {
      this.selectedMenuItems = this.menuSections[index];
      let description = 'Menu Section: ' + this.selectedMenuItems + '\n';

      for (let i = 0; i < this.selectedMenuItems.foodItems.length; i++) {
        description += i + ') ' + this.selectedMenuItems.foodItems[i].name + ' - ' + this.selectedMenuItems.foodItems[i].allergens+ '  -  ' + this.selectedMenuItems.foodItems[i].price + '\n';
      }

      let selection = this.showMenuOptions(description);
      switch (selection) {
        case '1' :
          this.addFoodItem();
          break;
        case '2' :
          this.deleteFoodItem();
      }
    }
  }


  deleteMenuSection() {
    // let index = prompt('Enter index of the Menu Section you wish to delete:');
    let index = this.displayMenuSections();
    if (index > -1 && index < this.menuSections.length) {
      this.menuSections.splice(index, 1);
    }
  }

  addFoodItem() {
    let name = prompt('Enter name for new Food Item');
    let allergens = prompt(`Enter ${name} Allergens:`);
    let price = prompt(`Enter ${name} Price:`);
    this.selectedMenuItems.foodItems.push(new Foods(name, allergens, price));
  }

  deleteFoodItem() {
    let index = prompt('Enter the index of the Food Item you wish to delete:');
    if (index > -1 && index < this.selectedMenuItems.players.length) {
      this.selectedMenuItems.players.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();

// ----------------------------------------------------------------------------------------------------------



// Two different classes that handle different type of email notifications


// console.log('cat')
*/