/**
 * Fetch last earthquakes with a given magnitud and a period of time
 * @param {1.0|2.5|4.5|all} magnitud
 * @param {hour|day|week|month} periodo
 * @example
 * <caption>returns earthquakes of the past week with a 1.0+ magnitud</caption>
 * node terremotos.js 1.0 week
 */
async function terremoto(magnitud, periodo) {
  if (magnitud !== "1.0" && magnitud !== "2.5" && magnitud !== "4.5" && magnitud !== "all") return;
  if (periodo !== "hour" && periodo !== "day" && periodo !== "week" && periodo !== "month") return;

  const response = await fetch(
    `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitud}_${periodo}.geojson`
  );
  const data = await response.json();
  const metadata = `
  *****************************
  ${data.metadata.title}
  ---------------------
  total: ${data.metadata.count}
  status: ${data.metadata.status}
  ---------------------
  ${new Date(data.metadata.generated * 1000)}
  `;
  const terremotos = data.features.map(({ properties, geometry }) => {
    return `
      ==============================
      ${properties.title}
      ${new Date(properties.time * 1000)}
      Magnitud: ${properties.mag}
      Tipo: earthquake
      Lugar: ${properties.place}
      Coordenadas: ${geometry.coordinates[0]} , ${geometry.coordinates[1]}
      Info: ${properties.url}
      Detalles: ${properties.detail}
      ==============================
      `;
  });
  console.log(metadata, terremotos.join(" "));
}

terremoto(process.argv[2], process.argv[3]);
