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
  / All inputs have an ID to which the php file will refer to. 
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
          <input type="password" name="oldpwd" id="oldPwd"><br>
        <label for="nupwd">Nytt passord</label>
          <input type="password" name="nupwd" id="pwd"><br> 
        <button @click="${this.updUser}type="submit">Oppdater</button>
       </form> 
    </div> 
    `;
  }

  updUser(inp){
      const nuForm = new data(inp.target.form);
      console.log(inp);                 //show form info in console
      fetch('api/updateUser.php', {    //send data to updateUser
        method: 'POST',
        body: nuForm   //body is the form within the render
      }).then(res=>res.json())
        .then(data=>{                 // error check
          if (data.status=='success') {
            console.log("update complete.");
        } else {
            console.log("Update incomplete.");
        }
      })
  }
}
customElements.define('edit-user', EditUser);
