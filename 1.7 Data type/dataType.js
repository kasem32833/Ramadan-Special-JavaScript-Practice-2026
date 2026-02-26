/*
    Primitive Data Type (Immutable -- ভ্যালু পরিবর্তন করা যায়না )

        1. Number -- Integer, Floating Point
            let price = 23 or 23.5;
        2. String -- Text
            let userName = "Abul"
        3. Boolean -- True or False
            let isStudent = true or false
        4. Null -- Empty Value
            let amount = null;
        5. Undefined -- Value Not Assigned
            let address;
        6. Symbol -- Unique Identifier
            let uniqueId = symbol("id")
        7. BigInt -- Vary Large Integer
            let bigInteger = 123456789012345677890n

    Non-Primitive Data Type (Mutable -- ভ্যালু পরিবর্তন করা যায় )

        1. Object -- 
        2. Array
        3. Function(object)


 */

    let product = {
        productName: "Mobile",
        price: 20000,
    }

    let fruits = ["Mango", "Banana", "Lichi", ]

    console.log(fruits[2]);

    fruits[2] = "jackfruits"

    console.log(fruits);

    let text =  "Web Warrior";

    console.log(text[0]);

    text[0] =  "D";

    console.log(text);



    //array কে array() দিয়ে ও প্রকাশ করা যায়

    // immutable এর ভ্যালু এর উপর compare করা যায়।
    // mutable এর refference এর উপর depend করতে হয়

    let numOne = 4;
    let numTwo = 4;

    console.log(numOne === numTwo);

    let userOne = {
        name : "Abul",
        age: 39
    }

    let userTwo = {
        name : "Abul",
        age: 39
    }

    console.log(userOne === userTwo);

