class Menu {
    items: Array<string>; 
    pages: number; 

    constructor(item_list: Array<string>, total_pages:number){
        this.items = item_list; 
        this.pages = total_pages;
    }

    list(): void {
        console.log("Our menu for today:")
        for(var i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}


class HappyMeal extends Menu {
    constructor(item_list: Array<string>, total_pages: number){
        super(item_list, total_pages);
    }
    list(): void {
        console.log("Our special kids menu for today:")
        for(var i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

var sundayMenu = new Menu(["pancakes", "waffles", "tea"], 1);
var menuForChildren = new HappyMeal(["candy", "toy", "juices"], 1);

sundayMenu.list();
menuForChildren.list();