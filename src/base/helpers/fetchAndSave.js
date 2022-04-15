export default async function fecthAndSave(endpoint, callback) {
  const res = await fetch(endpoint)
  const json = await res.json()
  return callback(json)
}
