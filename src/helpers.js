import Papa from 'papaparse';
export const imgArray = {
    "0_0": "COVID-19 in Europe english", "0_1": "Covid-19 in Europe-french", "0_2": "COVID-19-in Europe-dutch", "0_3": "COVID-19 in Europe-italian",
    "1_0": "Covid-19-english", "1_1": "covid-19-french", "1_2": "Covid-19-dutch", "1_3": "Covid-19-italian", "1_4": "covid-19-chinese",
    "2_0": "L'Aquila earthquake-english", "2_1": "L'Aquila earthquake-italian",
    "3_0": "Visakhapatnam gas leak-english", "3_1": "Visakhapatnam gas-hindi",
    "4_0": "l'Aude-french",
    "5_0": "European floods-english", "5_1": "European floods-french", "5_2": "European floods-dutch",
    "6_0": "Manchester_Arena_bombing-english",
    "7_0": "japan earthquake and tsunami-english", "7_1": "japan earthquake and tsunami-japanese"
}
export const getDataCSV = async (file) => {
    const response = await fetch(file)
    const reader = response.body.getReader()
    const result = await reader.read() // raw array
    const decoder = new TextDecoder('utf-8')
    const csv = decoder.decode(result.value) // the csv text
    const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
    const rows = results.data // array of objects
    const labels = []
    const data = []
    rows.forEach(row => {
        const [year, month, day] = [row.timestamp.substring(0, 4), row.timestamp.substring(4, 6), row.timestamp.substring(6, 8)]
        labels.push(`${year}/${month}/${day}`);
        data.push(row.views);
    })
    return { labels, data }
}