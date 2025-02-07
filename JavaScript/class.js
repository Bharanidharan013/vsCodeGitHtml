// class Try{
//     constructor(name,id){
//     this.name=name;
//     this.id=id;
//     }

//     summa(){
//         console.log(`Name: ${this.name} \n  Id: ${this.id}`);
//     }
// }
// let test=new Try("Abisheak",123);
// test.summa();

// class Square{
//     constructor(length){
//         this.length=length;
//     }

//     get length(){
//         return this.length;
//     }

//     set length(num){
//         this.length=num;
//     }

//     get area(){
//         return this.length*this.length;
//     }
// }

class BankAccount{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`${this.balance}`);
    }

    withdraw(amount){
        if(amount<=this.balance){
            this.balance-=amount;
            console.log(`${this.balance}`);
        }
        else
            console.log("WithDraw Failed!! amount Excede balance");
    }

    getBalance(){
        console.log(`Balance: ${this.balance}`);
    }

    acccountInfo(){
        console.log(`Account Holder: ${this.name}\n balance: ${this.balance}`);
    }
}

let sbi = new BankAccount("Abisheak",10000000);
sbi.deposit(10000000);
sbi.withdraw(10000);
sbi.getBalance();
sbi.acccountInfo();