class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",

    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}



function videoPlay(id){
    const urlSecreta = "https://clasesecreta.com" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://clasesecreta.com" + id;
    console.log("Pausando reproducción en la url " + urlSecreta);
}

class Lecture{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}

class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang; 
    }

    get name(){
        return this._name;
    } 

    set name(nuevoNombre){
        if (nuevoNombre === "Curso malísimo de programación básica"){
            console.error("Please don't");
        } else {
            this._name = nuevoNombre;
        }
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
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML y CSS",
    isFree: false,
});
const cursoPracticoHTML = new Course({
    name:"Curso practico de HTML y CSS",
    lang: "english",
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

class Student {
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
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }   else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ",no puedes tomar cursos en ingles");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
       }
    }
class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
       }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor",
        });
        comment.publicar();
    }
}


const juan = new FreeStudent({
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

const miguel = new BasicStudent({
    name: "Miguel",
    username: "miguelito",
    email: "miguelito@gmail.com",
    twitter: "miguelitoxd",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const luis = new ExpertStudent({
    name: "Luis",
    username: "lorozco",
    email: "lorozco@gmail.com",
    learningPaths: [
        cursoDefinitivoHTML,
        cursoUnity,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy",
    username: "fddy",
    email: "freddy@gmail.com",
});

