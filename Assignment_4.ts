//Class Assignment
//Interface
interface patient {
    name: string,
    age: number,
    gender: string,
    address: string,
    phone: string,
    email: string,
    bloodGroup: string,
    height: number,
        weight: number}
    let patient1: patient = {
            name: "John",
            age: 30,
            gender: "Male",
            address: "123 Main St",
            phone: "555-1234",
            email: "john@example.com",
            bloodGroup: "A+",
            height: 175,
            weight: 75};

 let patient2: patient = {
            name: "Jane",
            age: 25,
            gender: "Female",
            address: "456 Park Ave",
            phone: "555-5678",
            email: "jane@example.com",
            bloodGroup: "B-",
            height: 160,
            weight: 50}; 

 
 console.log(patient1,patient2)
 
 //Type Alias
 type Patient = {
    name: string,
    age: number,
    gender: string,
    address: string,
    phone: string};
    let patient3: Patient = {
            name: "Bob",
            age: 40,
            gender: "Male",
            address: "789 Elm St",
            phone: "555-9012"};
            let patient4: Patient = {   
                name: "Alice",
                age: 35,
                gender: "Female",
                address: "321 Oak Ave",
                phone: "555-3456"};
                console.log(patient3, patient4)