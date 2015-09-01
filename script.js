// Code goes here

angular.module('myApp', [])
.controller('MainController', ['$scope', function($scope) {
    $scope.questionList = [
        {
            "question_num": "1",
            "answersList": [
                {
                    "is_correct": "1",
                    "answer_text": "Answer 1",
                    "feedback": "Feedback 1"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 2",
                    "feedback": "Feedback 2"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 3",
                    "feedback": "Feedback 3"
                }
            ],
            "question_text": "Sample Question"
        },
        {
            "question_num": "2",
            "answersList": [
                {
                    "is_correct": "0",
                    "answer_text": "Answer 1",
                    "feedback": "Feedback 1"
                },
                {
                    "is_correct": "1",
                    "answer_text": "Answer 2",
                    "feedback": "Feedback 2"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 3",
                    "feedback": "Feedback 3"
                }
            ],
            "question_text": "Sample Question2"
        }
    ];
    
    $scope.addRow = function() {
      $scope.questionList.push({
            "question_num": $scope.questionList.length+1,
            "answersList": [
                {
                    "is_correct": "0",
                    "answer_text": "Answer 1",
                    "feedback": "Feedback 1"
                },
                {
                    "is_correct": "0",
                    "answer_text": "Answer 2",
                    "feedback": "Feedback 2"
                },
                {
                    "is_correct": "1",
                    "answer_text": "Answer 3",
                    "feedback": "Feedback 3"
                }
            ],
            "question_text": "Sample Question" + ($scope.questionList.length+1)
        });
    };
    
    $scope.removeRow = function(index) {
      if (index > -1) {
        // splice takes two parameters
        // First parameter - position to splice from
        // Second parameter - No of elements to be spliced
        $scope.questionList.splice(index, 1);
      }
    };
    
}]);