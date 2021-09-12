<script>
    var brnQuickScript = (function(){
        var $target = $('#brnQuickObj'), $targetThumb = $('#brnQuickObj .thumb');
        // 시간체크
        function timeCheck(){
            var now = brnQuick.nowTime; // 호출 하는 js에서 변수선언되어 가져다 사용
            if( new Date('2020-12-31T11:00:00+09:00').getTime() <= now && now < new Date('2021-01-15T11:00:00+09:00').getTime() ){
              $target.attr('href', '/shop/event/kurlyEvent.php?htmid=event/2020/1231/newyearsday');
              $targetThumb.attr('src', 'https://res.kurly.com/pc/service/main/2012/bnr_quick.png');
              $targetThumb.attr('alt', '2021 설 선물');
            }else if(  new Date('2021-01-15T11:00:00+09:00').getTime() <= now && now <= new Date('2021-02-10T23:00:00+09:00').getTime() ){
              $target.attr('href', '/shop/event/kurlyEvent.php?htmid=event/2021/0115/newyearsday');
              $targetThumb.attr('src', 'https://res.kurly.com/pc/service/main/2101/bnr_quick.png');
              $targetThumb.attr('alt', '2021 설 선물');
            }
        }
        return {
            timeCheck : timeCheck
        }
    })();
    brnQuickScript.timeCheck();


</script>