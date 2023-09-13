export const ObtenerDataProd = async()=>{
    const res = await fetch('https://car-data.p.rapidapi.com/cars?limit=10&page=0')
    if(!res.ok) throw new Error("respomse not ok")
    const data = await res.json()
    console.log(data)
    return(data)
}

// const url = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66da1b4532msh6c80d44983c663bp1eaf1fjsn5d23d65a10a5',
// 		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }