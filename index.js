const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myfirstargument = process.argv[2];

if (myfirstargument === "init"){
  if(fs.existsSync("./package.json")){
    console.log(" This package already exists")
    process.exit();
  } else {
    rl.question('what is your appname? ', (appName) => {
      rl.question('what is the author? ', (Author) => {
        rl.question('what is the keyWord? ', (keyWord) => {
          rl.question('what is the site? ', (site) => {
            rl.question('what is the file? ', (file) => {
              const packageJSON ={
                appname: appName,
                author:  Author,
                keyWord: keyWord,
                site:    site,
                file:    file,
              };
              fs.writeFile('./package.json',JSON.stringify(packageJSON,null,4), (err) => {
                  if (!err) {
                      console.log('done');
                  }
              });



              rl.close(); 
            })
          })
        })
      })
    });

  }

}
else{
process.exit();
}

