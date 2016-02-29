var mod = angular.module("mainModule",[]);
mod.controller("updateInfomation",function($scope){
	$scope.data = {
	"CompanyName": "Walmart",
	"CompanyAddress": "805 Moberly Ln, Bentonville, AR, 72716",
	"CompanyPhoneNumber": "479-555-7381",
	"CompanyEmail": "walmart@walmart.com",
	"CompanySNS": "facebook.com/walmart",
	}
	$scope.data.today = new Date();
});