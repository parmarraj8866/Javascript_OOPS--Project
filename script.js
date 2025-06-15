const formData = document.querySelector("#form-data");
const para = document.querySelector("#para");

formData.addEventListener("submit", (e) => {

    e.preventDefault();

    class Common {
        constructor(name, email, mobile) {
            this.name = name
            this.email = email
            this.mobile = mobile
        }

        show() {
            return (`name = ${this.name}, Email = ${this.email}, Mobile = ${this.mobile}`)
        }

    }


    class Student extends Common {
        constructor(name, email, mobile, grid) {
            super(name, email, mobile);
            this.grid = grid;

        }

        show() {

            return (`${super.show()}, Grid = ${this.grid} <br>`)
        }
    }

    class Parent extends Common {
        constructor(name, email, mobile, relation) {

            super(name, email, mobile)
            this.relation = relation;
        }

        show() {

            return (`${super.show()} , Relation = ${this.relation} <br>`)
        }
    }

    const allInputData = document.querySelectorAll("#form-data input");


    const s = new Student(allInputData[0].value, allInputData[1].value, allInputData[2].value, allInputData[3].value);
    const p = new Parent(allInputData[4].value, allInputData[5].value, allInputData[6].value, allInputData[7].value);

    document.querySelector(".container2").style.display = "block"

    para.innerHTML = `Student : ${s.show()}<br>Parent : ${p.show()}`;

})
