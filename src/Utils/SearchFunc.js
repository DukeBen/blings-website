
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

// function isValidPhoneNumber(phoneNumber) {
//     const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
//     return phoneRegex.test(phoneNumber);
// }

function isStringMadeOfLetters(str) {
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(str);
}

function containsStringIgnoringOrder(dWord, iWord) {
    const dWords = dWord.split(' ').sort();
    const iWords = iWord.split(' ').sort();
    return dWords.join(' ').includes(iWords.join(' '));
}
      

function SearchFunc(input)
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
            name += elem;
            //figure out how to filter json objects by name and using the containsStringIgnoringOrder method
        }
        else
        {
            if(elem.length() > 3 && elem.length() < 9) //input a number that isnt age or phone#
            {
                continue;
            }
            else if(elem.length() <=3){
                age = elem;
                //filter by age
            }
            else{
                phone = formatPhoneNumber(elem);
                //filter by phone#
            }
        }
    }
    
}