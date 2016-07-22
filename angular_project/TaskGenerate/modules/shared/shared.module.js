import appListHeader from './app.list.header/app.list-header.js'
import appListTable from './app.list.table/app.list-table.js'
import appListPager from './app.list.pager/app.list-pager.js'
import '../../../../vendor/paging.js'

angular.module('shared.module', [
    'bw.paging'
])
    .component('appListHeader', appListHeader)
    .component('appListTable', appListTable)
    .component('appListPager', appListPager)