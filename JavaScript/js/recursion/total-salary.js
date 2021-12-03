let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


let sumSalary = (department) => {
    if(Array.isArray(department)) {
        return department.reduce((sum, value) => sum + value.salary, 0);
    } else {
        let add = 0;
        Object.values(department).forEach((subDepartment) => {
            add += sumSalary(subDepartment);
        });
        return add;
    }
}

console.log(sumSalary(company));