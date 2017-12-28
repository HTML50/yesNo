  (function(){
  var answer,video,
  halfOfTotalVids = 5,
  lucky = Math.floor(Math.random()*10) + 1;
  if(lucky > halfOfTotalVids){
    answer = 'yes';
    lucky -= halfOfTotalVids;
  }else{
    answer = 'no';
  }
  //video = 'https://html50.github.io/yesNo/assets/'+answer+'/'+lucky+'.mp4';
  //video = 'http://127.0.0.1/yesNo/assets/'+answer+'/'+lucky+'.mp4';
  video = 'http://127.0.0.1/yesNo/assets/no/1.mp4';

  $answer = {
    answer: answer,
    video: video
  }
  return $answer
})();