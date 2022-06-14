/*
class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name} plays ${this.position}.`
  }
}

class Food {
  constructor(name) {
    this.name = name;
    this.price = price;
    //this.ingredients = ingredients;
  }

  describe() {
    return `${this.name}  price: ${this.price}`
  }
}


class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`)
    }
  }

  describe() {
    return `${this.name} has ${this.players.length} players.`
  }
}

class Menu {
  constructor() {
    this.menuList = [];
    this.selectedItem = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1' :
          this.createFoodItem();
          break;
        case '2' :
          this.viewFoodItem();
          break;
        case '3' :
          this.deleteFoodItem();
          break;
        case '4' :
          this.displayFoodList();
          break;
        default:
            selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert('Thank You for Dining with Us! And Come Back Soon!');
  }

  showMainMenuOptions() {
    return prompt(`
    0) exit
    01) create new Food Item
    02) view Food Item
    03) delete Food Item
    04) display Full Menu List
    `);
  }

  showTeamMenuOptions(foodInfo) {
    return prompt(`
    0) back
    01) Enter a Spice Level
    02) delete player
    ----------------------
    ${teamInfo}
    `);
  }

  displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ')' + this.teams[i].name + '\n';
    }
    alert(teamString);
  }

  createFoodItem() {
    let name = prompt('Enter name for new Food Item:');
    this.foodItem.push(new Team(name));
  }

  viewFoodItem() {
    let index = prompt('Enter the index of the Food Item you wish to view:');
    if  (index > -1 && index < this.teams.length) {
      this.selectedFoodItem = this.teams[index];
      let description = 'Team Name: ' + this.selectedFoodItem.name + '\n';

      for (let i = 0; i < this.selectedTeam.players.length; i++) {
        description += i + ') ' + this.selectedFoodItem.players[i].name + ' - ' + this.selectedFoodItem.players[i].position + '\n';
      }

      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case '1' :
          this.createPlayer();
          break;
        case '2' :
          this.deletePlayer();
      }
    }
  }


  deleteTeam() {
    let index = prompt('Enter index of the team you wish to delete:');
    if (index > -1 && index < this.teams.length) {
      this.teams.splice(index, 1);
    }
  }

  createPlayer() {
    let name = prompt('Enter name for new player');
    let position = prompt('Enter position for new player:');
    this.selectedTeam.players.push(new Player(name, position));
  }

  deletePlayer() {
    let index = prompt('Enter the index of the player you wish to delete:');
    if (index > -1 && index < this.selectedTeam.players.length) {
      this.selectedTeam.players.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();
*/



//------------------------------------------------------------------------------------------------------
// FoodItem
class Foods {
  constructor(name, allergens, price) {
    this.name = name;
    this.allergens = allergens;
    this.price = price;
  }

  describe() {
    return `${this.name} plays ${this.position}.`
  }
}

class MenuSection {
  constructor(name) {
    this.name = name;
    this.foodItems = [];
  }

  addFoodItem(item) {
    if (item instanceof FoodItem) {
      this.foodItems.push(item);
    } else {
      throw new Error(`You can only add an instance of FoodItem. Argument is not a FoodItem ${item}`)
    }
  }

  describe() {
    return `${this.name} has ${this.foodItems.length} Food Items on the Menu.`
  }
}

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
    1) Add Food Item
    2) delete Food Item
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