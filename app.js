// สร้าง class
class User{
    //property ข่้อมูล class เริ่มต้นจะเป็น public เสมอหากต้องการให้เป็น pivate ให้ใส่ # หน้าชื่อ
    #name
    #password

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
    setName(newName){ //method setName() ในกรณีที่ต้องการแก้ไขข้อมูล private
        this.#name = newName
    }
    getName(){
        return this.#name //กรณีที่ต้องการเรียกข้อมูลเฉพาะออกมาแสดงเรียกใช้ method getName()
    }
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
user1.setName("Keattipong")
// user1.showDetail() //ใช้กรณีระบุนอก class
console.log(user1.getName()) //กรณีที่ต้องการเรียกข้อมูลเฉพาะออกมาแสดงเรียกใช้ method getName()

