
const pj1 = {
    name:"Project1",intro:"PJ1 is about sososo.",url:'pj1Filler',git:"https://github.com/potatomon0/calculator"
}
const pj2={
    name:"Project2",intro:"PJ2 is about thatthatthat",url:'pj2Filler'
}
const pj3={
    name:"Project3",intro:"ItItIt is PJ3",url:'pj3Filler'
}
const pj4={
    name:"Project4",intro:"ThisThisThis is PJ4",url:'pj4Filler'
}

module.exports = [pj1,pj2,pj3,pj4]

// {projectInfo.map((project,i) => {
//     const {name, intro, img} = project
//     console.log(intro)
//     return(
//       <Link to={`/ProjectInfo/${intro}`} key={i}>
//         <div className="project">
//           <div><img src={project.img} alt="" className="pjImg"/>
//           </div>{project.name}</div>
//         </Link>)}
//         )}