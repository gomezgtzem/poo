class Pokemon {
  // Listado de atributos
  #name = "";
  #type = "";
  #evolutions = [];
  // El constructor nos va a inicializar los valores que reciba
  constructor(name, type, evolutions) {
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
  }
  // Begin Setters y Getters
  set name(name) {
    this.#name = name;
  }
  set type(type) {
    this.#type = type;
  }
  set evolutions(evolutions) {
    this.#evolutions = evolutions;
  }
  get name() {
    return this.#name;
  }
  get type() {
    return this.#type;
  }
  get evolutions() {
    return this.#evolutions;
  }
  // End Setters y Getters

  // Listado de los metodos de la clase
  attack() {
    return `${this.#name}, esta atacando <br/>`;
  }
  evolve(evolution = 0) {
    const EVOLVE = this.#evolutions[evolution] || "";
    let message = "No puedo evolucionar";
    if (EVOLVE) {
      message = `${this.name} esta evolucionando a ${EVOLVE}<br/> `;
      this.#name = EVOLVE;
    }
    return message;
  }
}
// HERENCIA 
class TypeFire extends Pokemon {
  constructor(name, evolutions) {
    super(name, "fire", evolutions);
  }
  message() {
    return `Hola, soy ${this.name} y soy de tipo fuego`;
  }
}

const charmander = new TypeFire ('Charmander', [
  "Charmeleon",
  "Charizard",
]);
console.log(charmander.message());
charmander.name = 'Gato'
console.log(charmander.message());
