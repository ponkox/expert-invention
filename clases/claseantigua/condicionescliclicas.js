//while
let jarra = 0;
let limite = 5;

while (jarra < limite) {
  jarra = jarra + 1;
  console.log(`la jarra tiene ${jarra} litros de agua`);
}

// do while
let jarron = 0;
let limiteDelJarron = 5;

do {
  jarron = jarron + 1;
  console.log(`la jarra tiene ${jarron} litros de agua`);
} while (jarron < limiteDelJarron);

//for

for (let i = 5; i >= 1; i = i - 1) {
  console.log('i vale', i);
}