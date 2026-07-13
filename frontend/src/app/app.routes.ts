import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserApp } from './features/users'
import { About } from './about'
export const routes: Routes = [
    { path: '', component: UserApp},
    { path: 'about', component: About}
];
