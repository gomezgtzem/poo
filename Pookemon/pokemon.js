// El nombre de la clase debe de ir con la primer letra en MAYUSCULA

class Pokemon {
  // Listado de atributos
  name       = "";
  type       = "";
  evolutions = [];
  // El constrctor nos va a inicializar los valores que reciba
  constructor(name, type, evolutions) {
    this.name       = name;
    this.type       = type;
    this.evolutions = evolutions;
  }
  // Listado de los metodos de la clase
  attack(){
    return `${this.name}, esta atacando <br/>`;
  }
  evolve(evolution = 0){
    const EVOLVE = this.evolutions[evolution] || "";
    let message = "No puedo evolucionar";
    if(EVOLVE){
      message = `${this.name} esta evolucionando a ${EVOLVE}<br/> `;
      this.name = EVOLVE;
    }
    return message;
  }
}
  const Charmander = new Pokemon("Charmander", "Fuego", ["Charmeleon", "Charizard"]);  
  const Squirtle   = new Pokemon("Squirtle", "Agua", ["Wartortle", "Blastoise"]);

  // Charmander
  document.write(`${Charmander.name} es de tipo ${Charmander.type}<br/>`);
  document.write(Charmander.attack());
  document.write(Charmander.evolve(0));
  document.write(`${Charmander.name} es de tipo ${Charmander.type}<br/>`);
  document.write(Charmander.evolve(1));
  // Squirtle
  document.write(`${Squirtle.name} es de tipo ${Squirtle.type}<br/>`);
  document.write(Squirtle.attack());
  document.write(Squirtle.evolve(0));
  document.write(`${Squirtle.name} es de tipo ${Squirtle.type}<br/>`);
  document.write(Squirtle.evolve(1));