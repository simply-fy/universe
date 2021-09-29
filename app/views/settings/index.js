(function () {
    appModule.controller('tenant.views.settings.index', [
        '$scope', '$filter', 'abp.services.app.tenantSettings', 'abp.services.components.addressRegistry',
        function ($scope, $filter, tenantSettingsService, addressRegistryService) {
            var vm = this;

            var usingDefaultTimeZone = false;
            var initialTimeZone = null;

            $scope.$on('$viewContentLoaded', function () {
                App.initAjax();
            });

            vm.isMultiTenancyEnabled = abp.multiTenancy.isEnabled;
            vm.showTimezoneSelection = abp.clock.provider.supportsMultipleTimezone;
            vm.activeTabIndex = (!vm.isMultiTenancyEnabled || vm.showTimezoneSelection) ? 0 : 1;
            vm.loading = false;
            vm.settings = null;

            vm.getSettings = function () {
                vm.loading = true;
                tenantSettingsService.getAllSettings()
                    .then(function (result) {
                        vm.settings = result.data;
                        initialTimeZone = vm.settings.general.timezone;
                        usingDefaultTimeZone = vm.settings.general.timezoneForComparison === abp.setting.values["Abp.Timing.TimeZone"];

                        vm.getAddressRegistryCities('');
                    }).finally(function () {
                        vm.loading = false;
                    });
            };

            vm.saveAll = function () {
                tenantSettingsService.updateAllSettings(
                    vm.settings
                ).then(function () {
                    abp.notify.info(app.localize('SavedSuccessfully'));

                    if (abp.clock.provider.supportsMultipleTimezone && usingDefaultTimeZone && initialTimeZone !== vm.settings.general.timezone) {
                        abp.message.info(app.localize('TimeZoneSettingChangedRefreshPageNotification')).done(function () {
                            window.location.reload();
                        });
                    }
                });
            };

            vm.getAddressRegistryCities = function(searchValue) {
                if (!vm.settings) return;

                vm.loading = true;
                addressRegistryService.getCitiesForSettings({defaultCityId: vm.settings.addressRegistry.defaultCityId, searchValue: searchValue})
                    .then(function (result) {
                        vm.addressRegistryCities = result.data;
                    }).finally(function () {
                            vm.loading = false;
                        }
                    );
            }


            vm.getSettings();
        }
    ]);
})();