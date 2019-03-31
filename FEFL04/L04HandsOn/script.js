class Employee {
    constructor(name, salary, hireDate){
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
    }

manager = new Employee("Michael", 20011101, "$45,000", "Managing Director");
designer = new Employee("Tito", 20021001, "$65,000", "Supervisory Associate Designer");
salesAssociate = new Employee("Jermaine", 20051201, "$34,000", "Director of Sales");

class descriptionOfJob extends manager {
    constructor(name, salary, hireDate, descriptionOfJob);
    super (name, salary, hireDate, descriptionOfJob);
}
    jobDescription() {
        console.log(this.name + "was hired" + " " + this.hireDate + "at" + " " + this,salary +"as" +" " + this.descriptionOfJob);
    }


class experience extends designer {
    constructor(experience)
    super (name, salary, hireDate, experience);
}

    yearsExperience() {
        console.log(this.name + "was hired" + " " + this.hireDate + "at" +" " + this,salary + "with" + " " + this.yearsExperience + "experience")
    }

class degrees extends salesAssociate {
    constructor (degrees)
    super (name, salary, hireDate, degrees);
}

    degreeCompleted() {
        console.log(this.name + "was hired" + this.hireDate + "at" + " " + this,salary + "with" + this.degreeCompleted + "degrees")
    }


    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
    }

}



