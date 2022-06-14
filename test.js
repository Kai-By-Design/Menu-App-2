

  viewMenuSections() {
    // this.displayTeams();
    // let index = prompt(`${this.displayMenuSections()}`);
    let index = this.displayMenuSections();
    if  (index > -1 && index < this.teams.length) {
      this.selectedTeam = this.teams[index];
      let description = 'Menu Section: ' + this.selectedTeam.name + '\n';

      for (let i = 0; i < this.selectedTeam.foodItems.length; i++) {
        description += i + ') ' + this.selectedTeam.foodItems[i].name + ' - ' + this.selectedTeam.foodItems[i].allergens+ '  -  ' + this.selectedTeam.foodItems[i].price + '\n';
      }

      let selection = this.showTeamMenuOptions(description);
      switch (selection) {
        case '1' :
          this.addFoodItem();
          break;
        case '2' :
          this.deleteFoodItem();
      }
    }
  };