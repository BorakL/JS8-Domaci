import { LaunchList } from './components/LaunchList.js' 
import { getAllLaunches } from './service'
import {getLaunchesByYear} from './service'
import { options} from './components/Options.js'


const app = document.querySelector('#app')
const select =document.querySelector("select");


// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

//Select 
select.innerHTML=options();


window.addEventListener("load",()=>{
   getAllLaunches().then(res => {
        app.appendChild(LaunchList(res.data))
    }) 
})

select.addEventListener("change",()=>{
    app.innerHTML="";
    getLaunchesByYear(select.value).then(res=>{
        app.appendChild(LaunchList(res.data));
    })
})










    
 
// Уместо свих лансирања, приказати само она из 2019. године
