
function tempConverter(number) {
    valNum = parseFloat(number);
    fToC = (number - 32) / 1.8;
    return fToC;
    //document.getElementById("celsius").innerHTML = (number-32) / 1.8;
  }
  //Added QUnit Test
  QUnit.test("tempConverter", function(assert) {
    assert.equal(tempConverter(167), 75, "167 degrees F == 75 degrees C");
    assert.equal(tempConverter(932), 500, "932 degrees F == 500 degrees C");
    assert.equal(tempConverter(15.8), -9, "15.8 degrees F == -9 degrees C");
    assert.equal(tempConverter(32), 0, "32 degrees F == 0 degrees C");
    assert.equal(tempConverter(190.4), 88, "190.4 degrees F == 88 degrees C");
    
  });