class Food {
  constructor(name, allergens, price) {
    this.name = name;
    this.allergens = allergens;
    this.price = price;
    this.string = this.describe();
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

  // addFoodItem(currentMenu) {
  //   this.menuGroup = currentMenu;
  //   let name = prompt('Enter name for new Food Item');
  //   let allergens = prompt(`Enter ${name} Allergens:`);
  //   let price = prompt(`Enter ${name} Price:`);
  //   this.foodList.push(new Foods(name, allergens, price));
  // }
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
        // case '4':
        //   alert(this.displayFoodList());
        //   break;
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
    4) Display Food Menu
    0) Exit
    `);
  }

  createMenu(){
    let newMenu = new Menu (prompt(`
    ${this.displayMenuList()}
    Enter New Menu Name Below: `));
    this.menuGroup.push(newMenu);
  };

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
    // console.log('line 110 display foodlist : current Menu:  ', Object.getOwnPropertyNames(currentMenu));
    // console.log('line 111 display foodlist : current Menu:  ', currentMenu.menuName);
    // console.log('line 112 display foodlist : current Menu Name:  ', currentMenu.menuName[foodList]);
    // console.log('line 113 display foodlist : foodlist:  ', currentMenu.foodList.push('taco'));
    // console.log('line 113.5 display foodlist : foodlist:  ', currentMenu.foodList.push('burrito'));
    // console.log('line 113.75 display foodlist : foodlist:  ', currentMenu.foodList.length);
    // console.log('line 113.105 display foodlist : foodlist:  ', currentMenu.foodList[0]);
    // alert()
    // console.log('line 114 display foodlist : add food item:  ', this.addFoodItem(currentMenu).foodList.push(new Food ('cake', 'gluten', '$5.99')));
    // console.log('line 115 display foodlist : add food item:  ', currentMenu.foodList.push(new Food ('cake', 'gluten', '$5.99')));
    // return `line 120 food item at ${currentMenu.foodList[0]}`

    let fList = ''
    // if(this.menuGroup[menuIndex].foodList.length > 0) {
      // if (currentMenu.foodList.length > 0){
        // console.log('line 126: foodList Length: ', currentMenu.foodList.length);
      for (let j = 0; j < currentMenu.foodList.length; j++) {
        let currentFood = currentMenu.foodList[j];
        console.log('line 129: ', currentMenu.foodList[j]);
        console.log('line 129: ', currentMenu.foodList);
        console.log('line 130: ', currentFood);
        console.log('line 131: ', currentFood.string);
        console.log('Line 132:  ', currentMenu.foodList[j].describe());
        // fList += `${j} ) `
        // let fname = currentFood.name;
        // let fallergens = currentFood.allergens;
        // let fprice = currentFood.price;
        fList += `${j} )  ${currentMenu.foodList[j].describe()} \n`
      }
      return fList;
    // }else {
    //   return 'Zero Foods Have Been Added';
    // }

  }

  /*
  displayFoodList(menuIndex){
    let currentMenu = this.menuGroup[menuIndex];
    console.log('line 107 display foodlist : current Menu:  ', Object.getOwnPropertyNames(currentMenu));
    console.log('line 108 display foodlist : current Menu:  ', currentMenu.menuName);
    console.log('line 108 display foodlist : current Menu:  ', currentMenu.menuName[foodList]);
    console.log('line 109 display foodlist : foodlist:  ', currentMenu.foodList);
    console.log('line 110 display foodlist : add food item:  ', this.addFoodItem(currentMenu).foodList.push(new Food ('cake', 'gluten', '$5.99')));
    console.log('line 111 display foodlist : add food item:  ', currentMenu.foodList.push(new Food ('cake', 'gluten', '$5.99')));
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
  */

  subMenu(currentMenu){
    return prompt(`
    ---   ${currentMenu.menuName}   ---
    ${this.displayFoodList(currentMenu)}

    ------------------------

    1) Add Food To Menu
    2) Delete Food From Menu
    3) Back To Main Menu`)
  }

  updateMenu(){
    // display existing menus
    // identify which menu to update
    let menuIndex = prompt(`${this.displayMenuList()}`);
    let currentMenu = this.menuGroup[menuIndex];
    /*
    let menuIndex = prompt(`${this.displayMenuList()}
    Select Menu Index to Update:`);
    console.log('Line 189: menuIndex: ', menuIndex);
    let currentMenu = this.menuGroup[menuIndex];
    currentMenu.foodList.push('tortilla');
    currentMenu.foodList.push(new Food('Cheese', 'Dairy', '$5.99').describe());
    console.log('line 191:  ', currentMenu.foodList);
    // display identified selected menu and current foods
    this.displayFoodList(menuIndex)
    */
    let selection = this.subMenu(currentMenu);
    while ( selection != 0) {
      switch(selection){
      // add Food
      case '1':
        this.addFoodItem(menuIndex);
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

  addFoodItem(menuIndex) {

    let currentMenu = this.menuGroup[menuIndex];
    let updatedFoodList = currentMenu.foodList
    prompt(`this.displayFoodList(menuIndex)`)
    let name = prompt('Enter name for new Food Item');
    let allergens = prompt(`Enter ${name} Allergens:`);
    let price = prompt(`Enter ${name} Price:`);
    currentMenu.foodList.push(new Food(name, allergens, price));
  }
 //////////////-----------------------------------------------------------------------------------

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
begin.mainMenu();