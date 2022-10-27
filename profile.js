
fetch("https://randomuser.me/api/").then(function(data){
    return  data.json()
}).then(response =>{
    let result = response.results[0];
    let serverPicture = result.picture.medium;
    let  pic = document.querySelector('#image');
        pic.src = serverPicture;
    let name = result = response.results[0].name;
    let fullName = name.title + ". " + name.first + " " + name.last;
    document.querySelector('#name').value=fullName;

    let gender = result = response.results[0].gender;
    let sex = gender;
    document.querySelector('#gender').value=sex;

    let email = result = response.results[0].email;
    let eMail = email;
    document.querySelector('#email').value=eMail;

    let dob = result = response.results[0].dob.date;
    let date = new Date(dob  );
    document.querySelector('#dob').value=date;

    let age = result = response.results[0].dob.age;
    let agE = age;
    document.querySelector('#age').value=agE;

    let location = result = response.results[0].location;
    let city = location.city + ", " + location.state + ", " + location.country;
    document.querySelector('#location').value=city;

    let street = result = response.results[0].location.street;
    let fullStreet = street.number + ", " + street.name;
    document.querySelector('#street').value=fullStreet;

    let post = result = response.results[0].location.postcode;
    let postCode = post;
    document.querySelector('#postcode').value=postCode;

    let coordinates = result = response.results[0].location.coordinates;
    let coordinate = coordinates.latitude + ", " + coordinates.longitude;
    document.querySelector('#coordinates').value=coordinate;

    let timezone = result = response.results[0].location.timezone;
    let timeZone = timezone.offset + ", " + timezone.description;
    document.querySelector('#timezone').value=timeZone;

    let login = result = response.results[0].login;
    let loGin = login.username + ", " + login.password;
    document.querySelector('#login').value=loGin;

    let registered = result = response.results[0].registered;
    let register = registered.date + ", " + registered.age;
    document.querySelector('#register').value=register;

    let phone = result = response.results[0].phone;
    let phoneNo = phone
    document.querySelector('#phone').value=phoneNo;

    let cell = result = response.results[0].cell;
    let cellNo = cell
    document.querySelector('#cell').value=cellNo;

    let id = result = response.results[0].id;
    let iD = id.name + ", " + id.value;
    document.querySelector('#id').value=iD;

    let info = result = response.info;
    let inFo = info.seed + ", " + info.results  + ", " + info.version;
    document.querySelector('#info').value=inFo;

}).catch(err =>{
    console.log(err)
})