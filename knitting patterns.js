function getGage(){
  const widthGage = window.prompt('How many stitches across is 10cm in your gage?')
  const heightGage = window.prompt('How many stitches high is 10cm in your gage?')
}

function makeScarf(){
  getGage()
  let stitchesAcross = Math.ceil(widthGage*1.524)
  let rowNumber = Math.ceil(heightGage*16.764)
  console.log(`Cast on ${stitchesAcross} stitches. Knit every row for ${rowNumber} rows. Cast off.`)
}

function makeHat(){
  getGage()
  let widthNeeded = window.prompt("What is the circumference of the head you're making a hat for in cm?")
  let heightNeeded = widthNeeded/2.5
  let rowNumber = Math.ceil(heightGage*0.1*heightNeeded)
  let bandWidth = Math.ceil(widthNeeded/10)
  let hatHeight = heightNeeded - bandWidth
  let stitchesAcross = Math.ceil(widthGage*0.1*widthNeeded)
  if (widthNeeded%2 == 0) {widthNeeded = widthNeeded + 1}
  let stitchesOff = Math.floor(stitchesAcross/4)
  console.log(`Cast on ${stitchesAcross} in your preferred method. Knit in 1 by 1 ribbing with smaller needles for ${bandWidth}cm. Then knit in stockinette for ${hatHeight}cm. From then, shape top of hat by alternating rows of K1, K2tog and knitting in stockinette. Once you only have ${stitchesOff}, stitches remaining, cast off by pushing a threaded tapestry needle through the remaniing stitches and sldding them off the needle. Pull these tight and sew the two sides of the hat together. Ta da!`)
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