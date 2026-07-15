import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserApp } from './features/users'
import { UserDetail } from './features/users/detail'
import { UserEdit } from './features/users/edit'
import { About } from './about'
import { NotFound } from './404'
export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: "full"},
    { path: 'users', component: UserApp},
    { path: 'user/:id', component: UserDetail},
    { path: 'user/:id/edit', component: UserEdit},
    { path: 'about', component: About},
    { path: '**', component: NotFound}
];
