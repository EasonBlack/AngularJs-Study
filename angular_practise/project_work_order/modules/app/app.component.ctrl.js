const LOCATION = new WeakMap();

class AppCtrl {
    constructor($location) {
        this.userIcon = '../../assets/Avarta_Chris.png'
        LOCATION.set(this, $location);
    }

    isActive(viewLocation) {
        var active = (LOCATION.get(this).path().indexOf(viewLocation) != -1);
        return active;
    }
}

AppCtrl.$inject = ['$location']

export default AppCtrl;