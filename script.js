//Q.1 For the given JSON iterate over all for loops(for,for in,for of)
//Answer:
const mobileBrand=[{"Brand":"Samsung","Model":"s23 ultra"},
    {"Brand":"Iphone","Model":"15pro max"},
    {"Brand":"Realme","Model":"10pro plus"},
    {"Brand":"Asus","Model":"Rog 5s"}];
//for loop;
for(let i=0;i<mobileBrand.length;i++){
    console.log(mobileBrand[i].Brand,mobileBrand[i].Model)
}


//for in;
for(let key in mobileBrand){
    console.log(mobileBrand[key].Brand,mobileBrand[key].Model)
}
//for of;
for(let product of mobileBrand){
    console.log(product.Brand,product.Model);
}

//Q.2 Create your own resume data using JSON format;
//Answer:
const myResume=[
    {"PersonalDetailes":
    {"Name":"Pragadeeshwaran",
    "emali":"aabc@gmail.com",
    "Degree":"BE",
    "Address":{"location":"Preambalur-dt","city":"Perambalur","Pincode":621212,"Area":"Aathur road","Landmark":"Oppsite to HP petrol bank"},
    "Nationality":"India",
    "State":"Tamil Nadu"}},
    {"Education":[
        {"Standard":10,"School":"Aaruthraa vidyalaiya matriculation school Perambalur","Percentage":90},
        {"Standard":12,"School":"Aaruthraa vidyalaiya matriculation school Perambalur","Percentage":63},
        {"UG":"BE(Manufacturing engineering)","College":"Central Institute of Petrochemicals Engineering & Technology (CIPET)","Percentage":75},
    ]},
    {"Skills":[{"name":"programming language","Level":"Beginner","catogory":"Python"},
               {"name":"programming language","Level":"Beginner","catogory":"JavaScript"}]
    },
    {"Language1":"Tamil","Language2":"English"},
    {"Intrest":[{"Sports":"Cricket and Football"},{"Technology":"Web-development"}]},
    {"Objective":"A highly motivated and hardworking individual looking for a responsible role in a Full-Stack development"}


]
console.log(myResume)

