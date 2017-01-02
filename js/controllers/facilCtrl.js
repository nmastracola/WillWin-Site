angular.module('willWin').controller('facilCtrl',function($scope, $state, mainService){
    $scope.slickConfig = {
        // centerMode: true,
        // centerPadding: '40px',
        // slidesToShow: 1,
        accessibility: true,
        enabled: true,
        arrows: true,
        dots: true,
        autoplay: false,
        draggable: true,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    // centerPadding: '40px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    // centerPadding: '40px',
                }
            }
    ]
    };
});