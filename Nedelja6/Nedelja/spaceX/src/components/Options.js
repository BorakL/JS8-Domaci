export const options = ()=>{
    const d = new Date();
    const recentYear = Number(d.getFullYear());
    var opt = "";
    for(let i=2006; i<=recentYear; i++){
        opt += `<option>${i}</option>`
    }
    return opt;
}