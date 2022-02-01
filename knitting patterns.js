function getGage(){
  const widthGage = window.prompt('How many stitches across is 10cm in your gage?')
  const heightGage = window.prompt('How many stitches high is 10cm in your gage?')
}


const projectOptions = ['socks', ' jumper', ' scarf', ' hat']
const projectType = window.prompt(`Which of the following are you planning on making? ${projectOptions}`)

if (projectType === 'scarf'){
  getGage()
  let stitchesAcross = Math.ceil(widthGage*1.524)
  let rowNumber = Math.ceil(heightGage*16.764)
  console.log(`Cast on ${stitchesAcross} stitches. Knit every row for ${rowNumber} rows. Cast off.`)
} else {
    console.log(`Still working on my ${projectType} design. Patterns are hard.`)
}