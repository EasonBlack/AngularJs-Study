import 'angular';
import 'angular-ui-router';
import 'angular-sanitize'
import 'localforage';
import '../../node_modules/angular-localforage/dist/angular-localForage';

import './app/app.module';


import './module/layout/layout.module';
import './module/layout/menu.component';
import './module/layout/content.component';

import './component/context_card/context_card.component';

import './services/fetch.service';
import './services/context.service';
import './services/contextList.service';

import './module/import/import.module';
import './module/import/import.route'
import './module/import/import.input/import.input.controller';
import './module/import/import.list/import.list.controller';

import './module/category/category.module';
import './module/category/category.route';
import './module/category/category.controller';
import './module/category/category.list/category.list.component';
import './module/category/category.type/category.type.component';




