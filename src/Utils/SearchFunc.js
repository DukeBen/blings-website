function SearchFunc(input)
{
    const phone = "";
    const name = "";
    const age = "";

    function formatPhoneNumber(phoneNumber) {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
      }

    function isValidPhoneNumber(phoneNumber) {
        const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
        return phoneRegex.test(phoneNumber);
      }

    function isStringMadeOfLetters(str) {
        const pattern = /^[a-zA-Z]+$/;
        return pattern.test(str);
      }
    
    function containsStringIgnoringOrder(dWord, iWord) {
        const dWords = dWord.split(' ').sort();
        const iWords = iWord.split(' ').sort();
        return dWords.join(' ').includes(iWords.join(' '));
      }
      
    
    const arr = input.split(" ");
    if(arr.length > 3)
    {
        return null;
    }
    for(const elem of arr)
    {
        if(isStringMadeOfLetters(elem))
        {
            name += elem;
            //figure out how to filter json objects by name and using the containsStringIgnoringOrder method
        }
        else
        {
            
        }
    }
    
}