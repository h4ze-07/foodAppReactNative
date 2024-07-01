import { makeAutoObservable } from "mobx";
import { TStoreItem } from "../types";
import { foods } from "../constants";

type LikedFood = TStoreItem[];

export class appStore {

    likedFood = <LikedFood>[];

    constructor() {
        this.likedFood = [...foods];
        makeAutoObservable(this)
    }

    get likedFoodLength() {
        return this.likedFood.length;
    }

    get consoleFood() {
        return this.likedFood
    }

    addToLiked(item: TStoreItem) {
        this.likedFood.push(item);
    }

    removeFromLiked(name: string) {
        const newArr = this.likedFood.filter(i => i.name !== name)
        this.likedFood = newArr;
    }

    isItemInLikedFood(name: string) {
        return this.likedFood?.some(i => {
            return i.name === name;
        })
    }
}