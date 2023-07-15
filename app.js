// สร้าง class
class User{
    //property ข่้อมูล class เริ่มต้นจะเป็น public เสมอหากต้องการให้เป็น pivate ให้ใส่ # หน้าชื่อ
    #name
    #password
    type="ผู้ใช้งานระบบ" //เพิ่ม property type

    //default constructor 
    // constructor(){
    //     console.log("เรียกใช้งาน constructor")
    // }

    constructor(name,password){ //parameter constructor
        this.#name=name
        this.#password=password
        // this.showDetail() 
    }   
    //method
    showDetail(){
        console.log(`ชื่อผู้ใช้ ${this.#name}, รหัสผ่าน ${this.#password}`)
    }
    //setter method คือในกรณีที่ต้องการแก้ไขข้อมูล private
    set Name(newName){ 
        this.#name = newName
    }
    //getter method คือในกรณีที่ต้องการเรียกข้อมูลเฉพาะออกมาแสดง
    get Name(){
        return this.#name 
    }
    set Password(newPassword){
        this.#password = newPassword
    }
    get Password(){
        return this.#password
    }
    //Accessors ต่างจาก method get และ set ปกติตรงที่เราเรียกการใช้งานผ่าน property ได้เลยโดยไม่ต้องเรียกใช้ผ่านฟังชันก์ setName 
}

// // สร้าง Object
// const user1=new User()
// console.log(user1.name)
// console.log(user1.password)

// const user2=new User()
// user2.name="non" //เมื่อต้องการเปลี่ยนข้อมูลใหม่จาก class สามารถเปลี่ยนได้โดยการพิมพ์ชื่อ object ตามด้วย property
// user2.password=4321
// console.log(user2.name)
// console.log(user2.password)

const user1=new User("non",1234)
const user2=new User("ton",4321)
const user3=new User("noina",1111)
console.log(user1.type) //เรียกใช้งานการแสดงผลโดยทั่วไปโดยดึงค่า object type มาแสดงผ่าน console.log
console.log(user2.type) //เรียกใช้งานการแสดงผลโดยทั่วไปโดยดึงค่า object type มาแสดงผ่าน console.log
console.log(user3.type) //เรียกใช้งานการแสดงผลโดยทั่วไปโดยดึงค่า object type มาแสดงผ่าน console.log
// user1.setName("Keattipong")
// user1.setPassword("0989")
// // user1.showDetail() //ใช้กรณีระบุนอก class
// console.log(user1.getName()) //กรณีที่ต้องการเรียกข้อมูลเฉพาะออกมาแสดงเรียกใช้ method ผ่าน get function
// console.log(user1.getPassword()) //กรณีที่ต้องการเรียกข้อมูลเฉพาะออกมาแสดงเรียกใช้ method ผ่าน get function
// user1.Name="Ton naja"
// user1.Password=4444
// console.log(user1.Name) //เรียกใช้งาน get Name() ในกรณีที่ไม่มีการกำหนดค่า >> setName()
// console.log(user1.Password) //เรียกใช้งาน get Name() ในกรณีที่ไม่มีการกำหนดค่า >> setName()
