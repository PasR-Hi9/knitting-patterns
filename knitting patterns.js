function getGage(){ //this function finds their stitches per cm in both vertical and horizontal planes
  const widthGage = 0.1*(window.prompt('How many stitches across is 10cm in your gage?'))
  const heightGage = 0.1*(window.prompt('How many stitches high is 10cm in your gage?'))
}

function makeScarf(){ //this simplest pattern there is - just divides normal hat proportions by gage
  getGage()
  let stitchesAcross = Math.ceil(widthGage*15.24)
  let rowNumber = Math.ceil(heightGage*167.64)
  console.log(`Cast on ${stitchesAcross} stitches. Knit every row for ${rowNumber} rows. Cast off.`)
}

function makeHat(){
  getGage()
  let widthNeeded = window.prompt("What is the circumference of the head you're making a hat for in cm?")
  let heightNeeded = widthNeeded/2.5 //calculates based on average head width to height ratio
  let rowNumber = Math.ceil(heightGage*heightNeeded) //gives number of rows
  let bandWidth = Math.ceil(widthNeeded/10) //takes height of ribbing as a proportion of head size
  let hatHeight = Math.ceil(heightNeeded - bandWidth)
  let stitchesAcross = Math.ceil(widthGage*widthNeeded)
  if (widthNeeded%2 == 0) {widthNeeded = widthNeeded + 1}
  let stitchesOff = Math.floor(stitchesAcross/4)
  console.log(`Cast on ${stitchesAcross} in your preferred method. Knit in 1 by 1 ribbing with smaller needles for ${bandWidth}cm. Then change to needles one size up and knit in stockinette for ${hatHeight}cm. From then, shape top of hat by alternating rows of K1, K2tog and knitting in stockinette. Once you only have ${stitchesOff} stitches remaining, cast off by pushing a threaded tapestry needle through the remaining stitches and sliding them off the needle. Pull these tight and sew the two sides of the hat together with mattress stitch. Ta da!`)
}
 

const projectOptions = ['socks', ' jumper', ' scarf', ' hat']
const projectType = window.prompt(`Which of the following are you planning on making? ${projectOptions}`)

if (projectType === 'scarf'){
makeScarf()
} else if(projectType === 'hat'){
makeHat()
} else {
    console.log(`Still working on my ${projectType} design. Patterns are hard.`)
}