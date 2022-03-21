let linearSearch = (phoneBook, key) => {
    for(let i =0; i < phoneBook.length; i++) {
        if(phoneBook[i].name === key) {
            return phoneBook[i].number;
        }
    }
    return false;
}

let phonebook = [
    {
        "name": "josh",
        "number": "201-210-0000"
    },
    {
        "name": "adam",
        "number": "201-123-4534"
    }
];
console.log(linearSearch(phonebook, "josh"));