import Contacts from "../Data/Contacts.json"



function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
    return '(' + match[1] + ') ' + match[2] + match[3];
    }
    return null;
}

function isStringMadeOfLetters(str) {
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(str);
}
      
export function getAge(date)
{
    const today = new Date();
    let birthDate = date.substring(0, 10);
    birthDate = new Date(birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
}

export function SearchData(input)
{
    let retContacts = JSON.parse(JSON.stringify(Contacts))
    let name = "";
    let age = "";
    
    const arr = input.split(" ");
    if(arr.length > 3) //can only take a max of 3 parameters
    {
        return null;
    }

    for(let elem of arr)
    {
        if(isStringMadeOfLetters(elem)) //instead of checking if a string is a number b/c input can vary and have non number chars
        {
            if(name === "")
                {name += elem;}
            else
                {name = name + " " + elem;}            
                retContacts = retContacts.filter(contact => contact.name.split(' ').includes(name));
            }
        else
        {
            if(elem.length > 3 && elem.length < 9) //input a number that isnt age or phone#
            {
                return [];
            }
            else if(elem.length <=3){
                age = elem;
                retContacts = retContacts.filter(contact => ("" + getAge(contact.birthday)) === age)
            }
            else{
                const phoneNumber = formatPhoneNumber(elem);
                console.log(phoneNumber);
                retContacts = retContacts.filter(contact => phoneNumber === contact.phone_number);
            }
        }
    }
    if(retContacts.length === 0) {
        return [];
    }
    return retContacts;
}
