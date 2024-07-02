import { makeAutoObservable, runInAction } from "mobx";
import { TStoreItem } from "../types";
import { foods } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LikedFood = TStoreItem[];

export class appStore {

    likedFood = <LikedFood>[];

    constructor() {
        makeAutoObservable(this)
        this.loadLikedFood()
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


    async updateStorage (key: string, data: string) {
        try {
            await AsyncStorage.setItem(key, data)
        } catch (error) {
            console.log(error);
        }
    }
}