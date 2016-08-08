let growlConfig = (growlProvider)=> {
    growlProvider.globalTimeToLive(3000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('top-center');
}

growlConfig.$inject = ['growlProvider'];

export default growlConfig;