import { Component } from '@angular/core';
import { InternalNgModuleRef } from '@angular/core/src/linker/ng_module_factory';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  groceries =   [       
    {
        Item: "Milk",
        Quantity: "1",
        Price: "$1.76",
        Total: "$1.76"
    },
{
  Item: "Bread",
  Quantity: "2",
  Price: "$2.12",
  Total: "$4.24"
},
{
  Item: "Blueberries",
  Quantity: "3",
  Price: "$1.98",
  Total: "$5.94"
},
{
  Item: "Large Eggs, 18 Count",
  Quantity: "1",
  Price: "$5.07",
  Total: "$5.07"
}
,
{
  Item: "Peanut Butter",
  Quantity: "1",
  Price: "$1.74",
  Total: "$1.74"
}
];



  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  removeItem(grocery, index: number) {
      const toast = this.toastCtrl.create({
      message: 'Removing Grocery Item - ' + grocery.Item + " with Quantity " + grocery.Quantity + " at  index " + index + " ...",
      duration: 3000
    });
    toast.present();

    this.groceries.splice(index, 1);
  }

 

  updateItem(grocery,  index: number) {
    this.showUpdateItemPrompt(grocery, index);
  }

  addItem() {
     this.showAddItemPrompt();
  }

  //for add, empty prompt fields. data is added on save (pushed onto array)

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Grocery Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'Item',
          placeholder: 'Item'
        },
        {
          name: 'Quantity',
          placeholder: 'Quantity'
        },
        {
          name: 'Price',
          placeholder: 'Price'
        },
        {
          name: 'Total',
          placeholder: 'Total'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.groceries.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

  //populates the prompt alert with the fields from the selected array item. Check for empty strings (i.e. nothing entered) before updating
  showUpdateItemPrompt(grocery, index: number) {
    const prompt = this.alertCtrl.create({
      title: 'Update Grocery Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'Item',
          placeholder: grocery.Item
        },
        {
          name: 'Quantity',
          placeholder: grocery.Quantity
        },
        {
          name: 'Price',
          placeholder: grocery.Price
        },
        {
          name: 'Total',
          placeholder: grocery.Total
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
             if (item.Item !==   '')
              {
              this.groceries[index].Item = item.Item;
              }
              if (item.Quantity !==  '') 
              {    
              this.groceries[index].Quantity = item.Quantity;
              }
              if (item.Price !==   '')
            {
              this.groceries[index].Price = item.Price;
            }  
            if (item.Total !==   '')
            {
              this.groceries[index].Total = item.Total;
            }  
          }
        }
      ]
    });
    prompt.present();
  }




}
