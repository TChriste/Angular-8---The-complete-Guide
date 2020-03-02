import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    activeClickCounter: number = 0;
    inactiveClickCounter: number = 0;

    incrementActiveClickCounter(){
        this.activeClickCounter++;
        console.log('Number of activations : ' + this.activeClickCounter);
    }

    incrementInactiveClickCounter(){
        this.inactiveClickCounter++;
        console.log('Number of deactivations : ' + this.inactiveClickCounter);
    }   
}