//Sobreescribir métodos heredados

import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  constructor({
    props,
    skills = [],
  }) {
    super(props);
    this.skills = skills;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor de ${this.skills.join()}"
    });
    return comment.publicar();
  }
}

//Comment.js
/*
export class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    const comentario = {
      studentName: this.studentName + " (" + this.studentRole + ")",
      likes: this.likes + " likes",
      content: this.content
    }
    return comentario
  }
}
*/

//Student.js
/*
import { Comment } from "./Comment";

export class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
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
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    return comment.publicar();
  }
}
*/