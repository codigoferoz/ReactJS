export class Contact {
    fstname = '';
    lstname = '';
    email = '';
    connected = false;    

    constructor(fstname, lstname, email, connected){
        this.firstname = fstname;
        this.lastname = lstname;
        this.email = email;
        this.connected = connected        
    }
}