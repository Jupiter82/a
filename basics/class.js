class User{
    //body
    name;
    email;
    status;
    role;
    address;

    //cannot create this as an arrow
    //cannot be async function
    constructor(_name,_email){
        //When object is created
        this.name = _name;
        this.units
    }

    setStatus = (_status) => {
        this.status = _status
    }
}

const user = new User()
user.name="Jupiter"
user.email = "jupierbade@gmail.com"
// user.setStatus("active")