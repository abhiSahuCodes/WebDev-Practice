// Call Back Hell

// Roll No fetching
// 1: 2s roll no
// 2: 2s name and age with roll no
// 3: gender

const data = () => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5, 6];
        console.log(roll_no);
        setTimeout((rollno) => {
            let bioData = {
                name: "Abhishek",
                age: 29
            }
            console.log(`My roll number is ${rollno}. My name is ${bioData.name} and I am ${bioData.age} years old.`);
            setTimeout((bioData) => {
                bioData.gender = "male";
                console.log(`I am a ${bioData.gender} person.`)
            }, 2000, bioData)
        }, 2000, roll_no[2])
    }, 2000)
}

data();