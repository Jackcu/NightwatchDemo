function isWin(){
  return process.platform=="win32";
}

function isMacOS(){
  return process.platform=="darwin";
}

function isLinux(){
  return process.platform=="linux";
}

module.exports = (function(settings) {
    
    //console.info(require("os").platform());
    //console.info();
    //settings.test_workers = false;

    if(isWin()){
      settings.selenium.cli_args["webdriver.chrome.driver"]="./bin/chromedriver_mac_32_2.40.exe"
    }
    else if(isMacOS()){
      settings.selenium.cli_args["webdriver.chrome.driver"]="./bin/chromedriver_mac_32_2.40"
    }
    else{

        throw new Error("not support OS:"+require("os").platform())

    }

    return settings;
    
  })(require('./nightwatch.json'));
  