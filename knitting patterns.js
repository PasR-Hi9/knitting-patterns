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
  console.log(`Cast on ${stitchesAcross} in your preferred method. Knit in 1 by 1 ribbing with smaller needles for ${bandWidth}cm. Then knit in stockinette for ${hatHeight}cm.`)
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