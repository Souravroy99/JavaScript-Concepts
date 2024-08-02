const course = {
    courseName: "Java Script",
    price: "111",
    courseInstructure: "STROY",
}

console.log(course.courseInstructure);

const { courseInstructure } = course
console.log(courseInstructure)

const {courseInstructure: CI} = course
console.log(CI) ;
