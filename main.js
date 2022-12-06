//Utilizando POO
class Learningpath{
    constructor({
        name,
        courses,
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new Learningpath({
    name: "Escuela de Desarrollo Web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
});
const escuelaData = new Learningpath({
    name: "Escuela de Data Science",
            courses: [
                "Curso Data Business",
                "Curso Dataviz",
                "Curso Tableau",
            ],
});
const escuelaVideoGames = new Learningpath({
    name: "Escuela de Videojuegos",
            courses: [
                "Curso de Produccion",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ],
});
const customLearningPath = new Learningpath({
    name: "Ruta de aprendizaje Personalizada",
            courses: [],
});

class Student3 {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
        schools = [],
        customLearningPath = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.schools = schools;
        this.customLearningPath = customLearningPath;
        this.learningPaths = {
            schools,
            customLearningPath,
        };
        
    }
    aprobarCurso(nuevoCurso){
        this.approvedCourses.push(nuevoCurso);
    }
    agregarEscuela(nuevaEscuela){
        this.schools.push(nuevaEscuela);
    }
    agregarCursoIndependiente(nuevoCurso){
        this.customLearningPath.push(nuevoCurso);
    }
}

const juan2 = new Student3({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "juanitodc",
    instagram: "juanitodc",
    learningPaths: [
        escuelaData,
        escuelaWeb,
        customLearningPath,
    ],
    schools: [
        escuelaData,
        escuelaWeb,
    ],

});

const miguelito2 = new Student3({
    name: "Miguel",
    username: "miguelito",
    email: "miguelito@gmail.com",
    twitter: "miguelitoxd",
});

const luisito = new Student3({
    name: "Luis",
    username: "lorozco",
    email: "lorozco@gmail.com",
    schools: [
        escuelaWeb,
    ],
});

