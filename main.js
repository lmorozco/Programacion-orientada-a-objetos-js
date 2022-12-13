
//Utilizando POO
class Lecture{
    constructor({
        name,
    }){
        this.name = name;
    }
}

class Course{
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}

class Learningpath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
}

const cursoProgBasica = new Course({
    name:"Curso gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name:"Curso practico de HTML y CSS",
});
const cursoDataBusiness = new Course({
    name:"Curso de DataBusiness",
});
const cursoDataviz = new Course({
    name:"Curso de Dataviz",
});
const cursoUnity = new Course({
    name:"Curso de Unity 3D",
});
const cursoUnreal = new Course({
    name:"Curso de Unreal Engine",
});


const escuelaWeb = new Learningpath({
    name: "Escuela de Desarrollo Web",
            courses: [
                cursoProgBasica,
                cursoDefinitivoHTML,
                cursoPracticoHTML,
            ],
});
const escuelaData = new Learningpath({
    name: "Escuela de Data Science",
            courses: [
                cursoProgBasica,
                cursoDataBusiness,
                cursoDataviz,
            ],
});
const escuelaVideoGames = new Learningpath({
    name: "Escuela de Videojuegos",
            courses: [
                cursoProgBasica,
                cursoUnity,
                cursoUnreal,
            ],
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
        classes = [],
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
        this.learningPaths = learningPaths;
        this.classes = classes;
    }
    aprobarCurso(nuevoCursoAprobado){
        this.approvedCourses.push(nuevoCursoAprobado);
    }
    agregarCurso(nuevoCurso){
        this.learningPaths.push(nuevoCurso);
    }
}

const juan2 = new Student3({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@gmail.com",
    twitter: "juanitodc",
    instagram: "juanitodc",
    learningPaths: [
        escuelaWeb,
        escuelaVideoGames,
    ],
});

const miguelito2 = new Student3({
    name: "Miguel",
    username: "miguelito",
    email: "miguelito@gmail.com",
    twitter: "miguelitoxd",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const luisito = new Student3({
    name: "Luis",
    username: "lorozco",
    email: "lorozco@gmail.com",
    learningPaths: [
        cursoDefinitivoHTML,
        cursoUnity,
    ],
});

