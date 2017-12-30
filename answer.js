  (function(){
  var answer,video,num,
  random = Math.floor(Math.random()*11);
  if(random > 5){
    answer = 'yes';
    num = Math.floor(Math.random()*16);
  }else if(random< 5){
    answer = 'no';
    num = Math.floor(Math.random()*33);
  }else{
    answer = 'maybe';
    num = 1;
  }
  video = 'https://html50.github.io/yesNo/assets/'+answer+'/'+num+'.mp4';
  //video = 'http://127.0.0.1/yesNo/assets/'+answer+'/'+num+'.mp4';

  $answer = {
    answer: answer,
    video: video
  }
  return $answer
})();