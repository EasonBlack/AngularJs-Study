import AppComponent from './app.component';
import '../database/database.module.js';
import '../project_general/project_general.module.js'
import '../project_detail/project_detail.module.js'
import '../common/app.common.module.js';


angular.module('app', [
    'app.database',
    'app.projectgeneral',
    'app.projectdetail',
    'app.common'
])
    .component('app', AppComponent)