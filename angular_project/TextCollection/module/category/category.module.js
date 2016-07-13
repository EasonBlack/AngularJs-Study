
import {CategoryController} from './category.controller';
import categoryRouteConfig from './category.route';
import {appCategoryType} from './category.type/category.type.component';
import {appCategoryList} from './category.list/category.list.component';

angular.module('category.module',
    [
        'ui.router'
    ])
    .config(categoryRouteConfig)
    .controller('CategoryController', CategoryController)
    .component('appCategoryType', appCategoryType)
    .component('appCategoryList', appCategoryList);
