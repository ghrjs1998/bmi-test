$(document).ready(function () {
    $("#submit").click(function () {
      const inputHeight = Number($("#height").val());
      const inputWeight = Number($("#weight").val());
      const bmiResult = inputWeight / ((inputHeight / 100) * (inputHeight / 100));
  
  
      if(inputHeight == ""){
        alert("키를 입력해주세요");
        return;
      }
      if(inputWeight == ""){
        alert("몸무게를 입력해주세요");
        return;
      }
      if(bmiResult < 18.5){
        alert("저체중");
      }else if(bmiResult >= 18.5 && bmiResult < 23){
        alert("정상");
      }else if(bmiResult >= 23 && bmiResult < 25){
        alert("과체중");
      }else if(bmiResult >= 25 && bmiResult < 30){
        alert("비만");
      }else if(bmiResult>=30){
        alert("고도비만");
      }else{
        alert("정확한 수치입력");
      }
  
    });
  });
  