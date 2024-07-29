const course = {
    courseName: "Java script",
    price: "191",
    courseInstructure: "Hitesh",
}

console.log(course.courseInstructure);

const {courseInstructure} = course
console.log(courseInstructure)

const {courseInstructure: CI} = course
console.log(CI) ;
