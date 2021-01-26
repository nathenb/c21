function formula(n1,n2){
    if (n1.x - n2.x < n2.width/2 + n1.width/2
      && n2.x - n1.x < n2.width/2 + n1.width/2
      && n1.y - n2.y < n2.height/2 + n1.height/2
      && n2.y - n1.y < n2.height/2 + n1.height/2) {
    return true
  }
  else {
    return false
  }
}