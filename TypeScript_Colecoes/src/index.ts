let mapa: Map<string,string>;
mapa = new Map();
mapa.set("PR","Parana");
mapa.set("AC","Acre");
console.log(mapa.size);
for(let entrada of mapa){
    console.log(entrada[0]);
    console.log(entrada[1]);
}
for (let sigla of mapa.keys()){
    console.log(sigla);
}

for (let estados of mapa.values()){
    console.log(estados);
}
function logMapElements(value:string, key:string, map:Map<string,string>){
    console.log(`map.get("${key}") = ${value}`);
}

mapa.forEach(logMapElements);
