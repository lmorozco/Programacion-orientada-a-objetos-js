//Primer Objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

//Primer Prototipo
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    
}

//Primer Metodo
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//Primer Instancia de Prototipos
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Produccion de Videojuegos",
        "Curso de Creacion de Personajes",
    ]
);

//Prototipos con la sintaxis de Clases en Js
class Student2{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;  
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2({
    email: "miguel@gmail.com",
    name: "Miguel",
    age: 28,
});

//Ventajas de la POO en JS
/*
const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: "undefined",
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Produccion",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ],
        },
    ],
};

const miguelito1 = {
    name: "Miguel",
    username: "miguelito",
    points: 100,
    socialMedia: {
        twitter: "miguelitoxd",
        instagram: "miguelitoxd",
        facebook: "miguelitoxd",
    },
    approvedCourses: [
        "Curso Data Business",
        "Curso Dataviz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso Data Business",
                "Curso Dataviz",
                "Curso Tableau",
            ],
        },
    ],
};
*/