
function takeANumber(katzDeliLine, newCust){
  katzDeliLine.push(newCust);
  return `Welcome, ${newCust}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${katzDeliLine[0]}`;
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
    for(var i = 0; i<katzDeliLine.length-1; i++){
      line = `${line} ${i+1}. ${katzDeliLine[i]},`;
    }
    line = `${line} ${i+1}. ${katzDeliLine[i]}`;
  }
  return line;
}
