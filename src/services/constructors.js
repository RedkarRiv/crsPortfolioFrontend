class User {
  constructor(name, mail, active_status) {
    this.name = name;
    this.mail = mail;
    this.active_status = active_status;
  }

  saludar() {
    console.log(`Hola ${this.name}`);
  }

  despedir() {
    console.log(`Adiós ${this.name}`);
  }

  avisoStatus() {
    console.log(`Tu cuenta se encuentra ${this.active_status}`);
  }
}
