 function formCtrl($scope){
			$scope.categories=[
				{name:'Frame'},
				{name:'watches'},
				{name:'wall hangings'}
			];
			
			$scope.category = $scope.categories[0];
			
            $scope.list=[
				{product:'Frame1',rate:20,category:'Frame',description:'This is nice work'},
				{product:'Frame2',rate:30,category:'watches',description:'This is nice work2'},
				{product:'Frame3',rate:40,category:'Frame',description:'This is nice work3'}
			];
			
			//function to find id item already exists
			$scope.in = function(){
				
				for(var i = 0; i < $scope.list.length; i++) {
					if($scope.list[i].product === $scope.product) {
						return i;
					}
				}
			}
			
            $scope.submit = function(){
				var ind = $scope.in();
				//if item exist then replace the value with new or push the values into the array
				if(ind != undefined){
					
					$scope.list[ind].product = $scope.product;
					$scope.list[ind].rate = $scope.rate;
					$scope.list[ind].category = $scope.category.name;
					$scope.list[ind].description = $scope.description;
						console.log($scope.category.name);
				}
				else{
					$scope.list.push({product:$scope.product,rate:$scope.rate,category:$scope.category.name,description:$scope.description});
				}
				
				//reset the values once submitted
				$scope.product="";$scope.rate="";$scope.category=$scope.categories[0];$scope.description ="";
				
            }
			
			
			$scope.delete = function($index){
				$scope.list.splice($index,1);
			}
			
			//pre populate the data once clicked on edit
			$scope.edit = function($index){
			
				$scope.product=$scope.list[$index].product;
				$scope.rate=$scope.list[$index].rate;
				$scope.category=$scope.list[$index].category;
				$scope.description =$scope.list[$index].description;
			}
        }