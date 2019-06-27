class Employee{
    constructor(employee){
        this.employee = employee;

        this.dataEmp = this.employee.dataset.emp;
        

        this.employeePic = employee.querySelector('.employee img');

        this.employeeText = employee.querySelector('.employee-text');

        this.employeePic.addEventListener('click', (event)=>{
            return this.selectPic();
        })

    }

    selectPic(){
        const text = document.querySelector(`.employee-text[data-emp="${this.dataEmp}"]`);

        text.classList.toggle('hide');

    }
}

const employee = document.querySelectorAll('.employee');



employee.forEach((employee)=>{
    return new Employee(employee);
})




