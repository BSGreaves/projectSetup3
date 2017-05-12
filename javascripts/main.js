var app = angular.module("animalApp", []);

app.controller("animalCtrl", ($scope) => {
	$scope.message = "Lauren's favorite animals:";
	$scope.animals = ["Badgers", "Lemurs", "Tortoises", "Snow Leopards"];
});

