import { ModuleWithProviders } from '@angular/core';

export interface ICustomer {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
    orderCount?: number;
    orders?: IOrder[];
    orderTotal?: number;
}

export interface IState {
    id: number;
    abbreviation: string;
    name: string;
}

export interface IOrder {
    product: string;
    price: number;
    quantity: number;
    orderTotal?: number;
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ICustomerResponse {
    status: boolean;
    customer: ICustomer;
}