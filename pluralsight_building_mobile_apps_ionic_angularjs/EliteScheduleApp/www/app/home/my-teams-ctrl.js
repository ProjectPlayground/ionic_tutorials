(function() {
    'use strict';

    angular.module('eliteApp').controller('MyTeamsCtrl', ['$state', 'MyTeamsService', 'eliteApi', MyTeamsCtrl]);

    function MyTeamsCtrl($state, MyTeamsService, eliteApi) {
        var vm = this;

        vm.myTeams = MyTeamsService.getFollowedTeams();

        vm.goToTeam = function(team) {
            eliteApi.setLeagueId(team.leagueId);
            $state.go("app.team-detail", { id: team.id });
        };
    }
})();