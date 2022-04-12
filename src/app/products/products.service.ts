import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  getProducts(){
    const products = [
      {
        productImage: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
        productName: 'Signature Burger',
        productPrice: 12.99
      },
      {
        productImage: 'https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        productName: 'Bacon Brunch',
        productPrice: 10.99
      },
      {
        productImage: 'https://images.pexels.com/photos/1633572/pexels-photo-1633572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        productName: 'Wishing Chicken',
        productPrice: 11.99
      },
      {
        productImage: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        productName: 'Jays Chick Wrap',
        productPrice: 11.99
      },
      {
        productImage:'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        productName: 'Ham Sub',
        productPrice: 11.99
      },
      {
        productImage: 'https://images.pexels.com/photos/3052364/pexels-photo-3052364.jpeg?auto=compress&cs=tinysrgb&w=600',
        productName: 'Lava Chicken',
        productPrice: 11.99
      },
    ]
    return products
  }

  getPizza(){
  const pizzaz = [
    {
      productImage: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      productName: 'Signature Cheese pizza',
      productPrice: 12.99
    },
    {
      productImage: 'https://images.pexels.com/photos/4109072/pexels-photo-4109072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      productName: 'Pepperoni Pizza',
      productPrice: 10.99
    },
    {
      productImage: 'https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      productName: 'veg pizza',
      productPrice: 11.99
    },
    {
      productImage: 'https://images.unsplash.com/photo-1620374645310-f9d97e733268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      productName: 'pan olive pizza',
      productPrice: 11.99
    },
    {
      productImage:'https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      productName: 'chef-pier special',
      productPrice: 11.99
    },
    {
      productImage: 'https://images.unsplash.com/photo-1620041631703-45ddcef3dae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      productName: 'Sheperds Pie Pizza',
      productPrice: 11.99
    },
  ]
  return pizzaz
}

getWraps(){
  const wraps = [
    {
      productImage: 'https://yesofcorsa.com/wp-content/uploads/2020/03/Burritos-Desktop-Wallpaper-HD.jpg',
      productName: 'Signature wrap',
      productPrice: 12.99
    },
    {
      productImage: 'https://img.freepik.com/free-photo/chicken-wrap_144627-33297.jpg?t=st=1649753546~exp=1649754146~hmac=e26e1d4870541e1ad6eed95507c4295b692c3654198bddddae05ecba905e5ef5&w=826',
      productName: 'chilli chicken wrap',
      productPrice: 899.99
    },
    {
      productImage: 'https://i2.wp.com/berriesandspice.com/wp-content/uploads/2017/04/Berries-and-Spice-Easy-Delicious-and-Healthy-Beef-Burritos-22.jpg?w=2808&ssl=1',
      productName: 'beef wrap',
      productPrice: 999.99
    },
    {
      productImage: 'https://tse3.mm.bing.net/th?id=OIP._bLXUeqdqbeLSW4ZhMlhNwHaE8&pid=Api&P=0&w=250&h=167',
      productName: 'panini egg wrap',
      productPrice: 799.99
    },
    {
      productImage:'https://tse2.mm.bing.net/th?id=OIP.Gd2p11WZ3z2XLX6qhyvUvQHaE8&pid=Api&P=0&w=250&h=166',
      productName: 'vegi wrap',
      productPrice: 700.99
    },
    {
      productImage: 'https://tse3.mm.bing.net/th?id=OIP.GGnnMRhaH_9CgVMbAx-_fQHaE7&pid=Api&P=0&w=257&h=171',
      productName: 'Chilli Cheese Wrap',
      productPrice: 999.99
    },
  ]
  return wraps
}

  constructor() { }
}
