abstract class Department {

    constructor(public name: string){

    }
    printName(): void{
        console.log("Department name is: "+ this.name);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department{

    constructor(){
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("A meeting at 10am.");
    }

    generateReports(): void {
        console.log("Generating reports...");
    }
}

let dep: Department;
dep = new AccountingDepartment();
dep.printName();
dep.printMeeting();
// ERROR: dep.generateReports();