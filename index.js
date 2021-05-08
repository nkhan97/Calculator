document.addEventListener('keydown', (e) => {
    makeSound(e.key)
});

function makeSound(key) {
    switch (key) {
        case "1":
            var num1 = document.getElementById('num1')
            num1.click();
            break;

        case "2":
            var num2 = document.getElementById('num2')
            num2.click();
            break;          
            
        case "3":
            var num3 = document.getElementById('num3')
            num3.click();
            break; 
            
        case "4":
            var num4 = document.getElementById('num4')
            num4.click();
            break;

        case "5":
            var num5 = document.getElementById('num5')
            num5.click();
            break;          
            
        case "6":
            var num6 = document.getElementById('num6')
            num6.click();
            break;   

        case "7":
            var num7 = document.getElementById('num7')
            num7.click();
            break;

        case "8":
            var num8 = document.getElementById('num8')
            num8.click();
            break;          
            
        case "9":
            var num9 = document.getElementById('num9')
            num9.click();
            break; 
            
        case "0":
            var num0 = document.getElementById('num0')
            num0.click();
            break;

        case "x":
            var multiply = document.getElementById('x')
            multiply.click();
            break;          
            
        case "/":
            var divide = document.getElementById('/')
            divide.click();
            break;   

        case "=":
            var add = document.getElementById('+')
            add.click();
            break;

        case "-":
            var minus = document.getElementById('-')
            minus.click();
            break;          

        case ".":
            var dot = document.getElementById('.')
            dot.click();
            break;

        case "Backspace":
            var del = document.getElementById('del')
            del.click();
            break;          
            
        case "Enter":
            var equal = document.getElementById('equal')
            equal.click();
            break;   

        default: console.log(key);          
    }
}