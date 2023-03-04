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

// function containsStringIgnoringOrder(dWord, iWord) {
//     const dWords = dWord.split(' ').sort();
//     const iWords = iWord.split(' ').sort();
//     return dWords.join(' ').includes(iWords.join(' '));
// }
      
function getAge(date)
{
    const today = new Date();
    const birthDay = date.substring(0, 10);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
}

function SearchData(input)
{
    const phone = "";
    const name = "";
    const age = "";
    
    const arr = input.split(" ");
    if(arr.length > 3) //can only take a max of 3 parameters
    {
        return null;
    }

    for(const elem of arr)
    {
        if(isStringMadeOfLetters(elem)) //instead of checking if a string is a number b/c input can vary and have non number chars
        {
            if(name === "")
                name += elem;
            else
                name = name + " " + elem;
            Contacts = Contacts.filter(contact => contact.name.includes(name));
        }
        else
        {
            if(elem.length() > 3 && elem.length() < 9) //input a number that isnt age or phone#
            {
                continue;
            }
            else if(elem.length() <=3){
                age = elem;
                Contacts = Contacts.filter(contact => getAge(contact.birthday) === age)
            }
            else{
                phoneNumber= formatPhoneNumber(elem);
                Contacts = Contacts.filter(contact => phoneNumber === contact.phone_number);
            }
        }
    }
    return Contacts;
}
