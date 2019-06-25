class Employee{
    constructor(employee){
        this.employee = employee;

        this.dataEmp = this.employee.dataset.emp;
        console.log(this.dataEmp);

        this.employeeName = employee.querySelector('.employee-name');

        this.employeeDscrp = employee.querySelector('.employee-dscrpt');

        this.employeeName.addEventListener('click', (event)=>{
            return this.selectName();
        })

    }

    selectName(){
        const dscrp = document.querySelector(`.employee-dscrpt[data-emp="${this.dataEmp}"]`);

        dscrp.classList.toggle('hide');

    }
}

const employee = document.querySelectorAll('.employee');

const employeeName = document.querySelectorAll('.employee-name');

const employeeDscrp = document.querySelector('.employee-dscrpt');


employeeName.forEach((name)=>{
    name.style.cursor = 'pointer';
})

employee.forEach((employee)=>{
    return new Employee(employee);
})




