import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor(){
    super();
  }
  /*
  / user uid is entered in the form due to its requirement in updateUser.php (f.ex. line 26)
  */
  render() {
    return html`
    <div>
       <form method="POST">
        <input type="hidden" name="uid" id="uid" value="${this.user.uid}"> 
        <label for="uname">Brukernavn</label>
          <input type="text" name="uname" id="uname" value="${this.user.uname}"><br>
        <label for="firstName">Fornavn</label>
          <input type="text" name="firstName" id="firstName" value="${this.user.firstName}"><br>
        <label for="lastName">Etternavn</label>
          <input type="text" name="lastName" id="lastName" value="${this.user.lastName}"><br>
        <label for="oldpwd">Gamle passord</label>
          <input type="password" name="oldpwd" id="oldpwd"><br>
        <label for="nupwd">Nytt passord</label>
          <input type="password" name="nupwd" id="pwd"><br> 
        <button @click="${this.updUser}type="submit">Oppdater</button>
       </form> 
    </div> 
    `;
  }

  updUser(inp){
      console.log(inp);
      fetch('api/updateUser.php', {    //send data to updateUser
        method: 'POST',
        body: inp.target.form         //target form is the form
      })
      
  }
}
customElements.define('edit-user', EditUser);
