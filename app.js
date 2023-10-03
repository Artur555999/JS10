
let x = []

for (let i = 0; i < Infinity; i++) {
    let command = prompt('Введите команду');
    let words = command.split(', ')
    if (words[0] == 'add') {
        x.push(words[1])
    }else if (words[0] == 'del') {
        for (let key in x) {
        x[key] == words[1] ? x.splice(key ,1) : ''
        }
    }else if (words[0] == 'stop') {
        break
    }
   console.log(x); 
}
