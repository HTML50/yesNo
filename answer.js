  (function(){
  var answer,video,lucky,
  random = Math.floor(Math.random()*11);
  if(random > 5){
    answer = 'yes';
    lucky = Math.floor(Math.random()*16);
  }else if(random< 5){
    answer = 'no';
    lucky = Math.floor(Math.random()*33);
  }else{
    answer = 'maybe';
    lucky = 1;
  }
  video = 'https://html50.github.io/yesNo/assets/'+answer+'/'+lucky+'.mp4';
  //video = 'http://127.0.0.1/yesNo/assets/'+answer+'/'+lucky+'.mp4';

  $answer = {
    answer: answer,
    video: video
  }
  return $answer
})();