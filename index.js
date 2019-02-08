
function takeANumber(katzDeliLine, newCust){
  return `Welcome, ${newCust}. You are number ${currentLine.length+1} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine){
  var line = ""
  if(katzDeliLine.length === 0){
    line = "The line is currently empty.";
  }
  else{
    line = "The line is currently:"
    for(var i = 0; i<katzDeliLine.length; i++){
      line = `${line} ${i+1}. ${katzDeliLine[i]}`
    }
  }
  return line;
}