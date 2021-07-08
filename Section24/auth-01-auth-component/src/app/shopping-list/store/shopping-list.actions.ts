import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = '[Shpping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shpping List] Add Ingredients';
export const UPDATE_INGREDIENTS = '[Shpping List] Update Ingredient';
export const DELETE_INGREDIENTS = '[Shpping List] Delete Ingredient';
export const START_EDIT = '[Shpping List] Start Edit';
export const STOP_EDIT = '[Shpping List] Stop Edit';


export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENTS;

    constructor(public payload: Ingredient) {}
}

export class DeleteIngredients implements Action {
    readonly type = DELETE_INGREDIENTS;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload: number) {}
} 

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}


export type ShoppingListActions = AddIngredient 
    | AddIngredients
    | UpdateIngredient 
    | DeleteIngredients
    | StartEdit
    | StopEdit;