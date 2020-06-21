// fetch api/multiple AJAX call using function with fetch API
function data(index) {
    fetch('  https://api.covid19api.com/summary  ').then((apidata) => {
        // console.log(apidata)
        return apidata.json()
    }).then((adata) => {
        // console.log(adata)
        let con = console.log(adata.Countries[`${index}`])
        console.log(`name is ${con.Country} confirmed is ${con.NewConfirmed} total deaths is ${con.TotalDeaths}`)
    }).catch((error) => {})
}
data(120);
data(160);
data(130);
data(110);
async function co() {
    const c1 = await fetch(' https://api.covid19api.com/summary ')
    console.log(c1)
    // const c2=await c1.json()
    // console.log(c2.Countries)
}
co()