import { makeAutoObservable, runInAction } from "mobx";
import { TCartItem, TStoreItem } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LikedFood = TStoreItem[];
type CartFood = TCartItem[];

export class appStore {

    likedFood = <LikedFood>[];
    cart = <CartFood>[];

    constructor() {
        makeAutoObservable(this)
        this.loadLikedFood()
        this.loadUserCart()
    }

    async loadLikedFood() {
        try {
            const likedFoodJson = await AsyncStorage.getItem('Liked');
            if (likedFoodJson) {
                const likedFoodArray = JSON.parse(likedFoodJson);
                runInAction(() => {
                    this.likedFood = likedFoodArray;
                });
            } else {
                this.likedFood = [];
            }
        } catch (error) {
            console.error("Failed to load liked food from AsyncStorage", error);
        }
    }


    async loadUserCart() {
        try {
            const cartJson = await AsyncStorage.getItem('Cart');
            if (cartJson !== null) {
                const loadedCart = JSON.parse(cartJson);
                this.cart = loadedCart;
            } else {
                this.cart = [];
            }
        } catch (error) {
            console.error("Failed to load liked food from storage", error)
        }
    }


    async updateStorage(key: string, data: string) {
        try {
            await AsyncStorage.setItem(key, data)
        } catch (error) {
            console.log(error);
        }
    }

    checkForItem(storage: LikedFood | CartFood, name: string) {
        return storage.some(i => i.name === name);
    }

    //   LIKED FOOD

    get likedFoodLength() {
        return this.likedFood.length;
    }

    addToLiked(item: TStoreItem) {
        this.likedFood.push(item);
        this.updateStorage('Liked', JSON.stringify(this.likedFood))
    }

    removeFromLiked(name: string) {
        const newArr = this.likedFood.filter(i => i.name !== name)
        this.likedFood = newArr;
        this.updateStorage('Liked', JSON.stringify(this.likedFood))
    }

    isItemInLikedFood(name: string) {
        return this.likedFood?.some(i => {
            return i.name === name;
        })
    }


    // CART

    get cartLength() {
        return this.cart.length;
    }

    get totalCartAmount() {
        return this.cart.reduce((pr, curr) => {
            return pr + (Number(curr.price) * curr.quantity)
        }, 0).toFixed(2)
    }

    clearCart() {
        this.cart = [];
        this.updateStorage('Cart', JSON.stringify(this.cart));
    }

    addNewItemToCart(item: TStoreItem) {
        if (this.checkForItem(this.cart, item.name)) {
            this.addQuantity(item.name);
        } else {
            const itemToCart = {...item, quantity: 1}
            this.cart.push(itemToCart)
        }

        this.updateStorage('Cart', JSON.stringify(this.cart));
    }

    removeItemFromCart(name: string) {
        const newCart = this.cart.filter(i => i.name !== name);
        this.cart = newCart;
        this.updateStorage('Cart', JSON.stringify(this.cart));
    }

    addQuantity(name: string) {
        const newCart = this.cart.map(item => {
            if (item.name === name) {
                return { ...item, quantity: item.quantity + 1 }
            } else {
                return item;
            }
        })
        this.cart = newCart;
        this.updateStorage('Cart', JSON.stringify(this.cart));
    }

    reduceQuantity(name: string) {

        const targetItem = this.cart.filter( i => i.name === name);
        
        if (targetItem[0].quantity === 1) {
            this.removeItemFromCart(name)
        } else {
            const newCart = this.cart.map(item => {
                if (item.name === name) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item;
                }
            })
            this.cart = newCart;
            this.updateStorage('Cart', JSON.stringify(this.cart));
        }
    }
}