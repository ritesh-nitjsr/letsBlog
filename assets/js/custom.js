var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

var app = angular.module('blogApp', []);

app.controller('mainController', function($scope,$http){
	/*$scope.posts = [];
	var postData=localStorage['postsList'];

	if(postData!=undefined)
	{
		$scope.posts=JSON.parse(postData);
	}
	$scope.newPost = {title: '', text: '', created_at: ''};
	
	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {title: '', text: '', created_at: ''};
		localStorage['taskList']=JSON.stringify($scope.posts);
	};*/
    $scope.posts = [];
    $scope.newPost = {title: '', text: '', created_at: ''};
    $http.get("fetch.php")
    .then(function (response) {$scope.posts = response.data.records;});

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		
		
		$http.post("insert.php",{'title': $scope.newPost.title, 'text': $scope.newPost.text, 'created_at': $scope.newPost.created_at})
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
        console.log("fuck");
        $scope.newPost = {title: '', text: '', created_at: ''};
	};    

});