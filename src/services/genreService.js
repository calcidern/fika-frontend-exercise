export function toGenreMap(genreData){
  const genreEntries = genreData.map(({id, name})=>[id,name]);
  return Object.fromEntries(genreEntries);
}