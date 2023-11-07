import { Component } from '@angular/core';

@Component({
  selector: 'app-clothing-selection',
  templateUrl: './clothing-selection.component.html',
  styleUrls: ['./clothing-selection.component.scss']
})
export class ClothingSelectionComponent {
  clothes = [
    {
      id: '1',
      name: 'Maxi Dress',
      sizes: ['S', 'M', 'L']
    },
    {
      id: '2',
      name: 'Striped T-shirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '3',
      name: 'Floral Dress',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: '4',
      name: 'Polo Shirt',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '5',
      name: 'Hooded Sweatshirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '6',
      name: 'Khaki Pants',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '7',
      name: 'Leather Jacket',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '8',
      name: 'Plaid Shirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '9',
      name: 'Denim Jacket',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '10',
      name: 'Bomber Jacket',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '11',
      name: 'Maxi Dress',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '12',
      name: 'Striped T-shirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '13',
      name: 'Floral Dress',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '14',
      name: 'Polo Shirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '15',
      name: 'Hooded Sweatshirt',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '16',
      name: 'Blue skirt',
      sizes: ['S', 'M', 'L']
    }
  ];
}
